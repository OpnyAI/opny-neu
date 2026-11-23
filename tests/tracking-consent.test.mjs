import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';
import ts from 'typescript';
function setup({ stored = {}, ads = '', meta = '', path = '/', blockedStorage = false } = {}) {
  const values = new Map(Object.entries(stored));
  const deletions = [];
  const document = { referrer: 'https://example.org/?email=referrer@example.org' };
  Object.defineProperty(document, 'cookie', { get: () => '_ga=1; _ga_TEST=2; _fbp=3; _gcl_aw=4', set: value => deletions.push(value) });
  const window = { location: new URL('https://www.opny.ai'+path), localStorage: { getItem: key => {if(blockedStorage) throw Error();return values.get(key)??null}, setItem: (key,value) => {if(blockedStorage)throw Error();values.set(key,value)} }, dispatchEvent() {}, addEventListener() {}, removeEventListener() {} };
  const context = vm.createContext({ window, document, URL, Event, console, location: window.location });
  const modules = {};
  function load(name) {
    if (modules[name]) return modules[name];
    if (name === './tracking-config') return { GA_ID: 'G-TEST123', GOOGLE_ADS_ID: ads, META_PIXEL_ID: meta, HAS_MARKETING: Boolean(ads||meta) };
    const source = ts.transpileModule(fs.readFileSync(`src/lib/${name.slice(2)}.ts`, 'utf8'), { compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2021} }).outputText;
    const exports = {}; modules[name] = exports;
    const fn=vm.runInContext(`(function(exports,require){${source}\n})`,context); fn(exports,load); return exports;
  }
  const consent = load('./consent'), tracking = load('./tracking');
  return { window, document, values, deletions, consent, tracking, commands: () => window.dataLayer?.map(x=>Array.from(x))??[], events: () => window.dataLayer?.filter(x=>x[0]==='event').map(x=>Array.from(x))??[], navigate: p => { window.location = new URL('https://www.opny.ai'+p);context.location=window.location; } };
}
test('legacy Analytics consent never grants marketing; explicit new denial wins',()=>{
  const s=setup({stored:{cookie_consent_v2:'accepted'}});assert.equal(s.consent.readConsent(),'statistics');assert.equal(s.consent.preferences(s.consent.readConsent()).marketing,false);s.consent.saveConsent('declined');assert.equal(s.consent.readConsent(),'declined');
});
test('blocked browser storage still honors current choice without throwing',()=>{
  const s=setup({blockedStorage:true});assert.equal(s.consent.readConsent(),null);s.consent.saveConsent('statistics');assert.equal(s.consent.readConsent(),'statistics');
});
test('no events before consent, first consent default is denied before config',()=>{
  const s=setup();s.tracking.syncTrackingConsent();s.tracking.trackCurrentPage();assert.equal(s.events().length,0);const first=s.commands()[0];assert.deepEqual(JSON.parse(JSON.stringify(first)),['consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'}]);s.consent.saveConsent('statistics');s.tracking.syncTrackingConsent();s.tracking.trackCurrentPage();assert.equal(s.events().length,1);assert.equal(s.events()[0][1],'page_view');assert.equal(s.commands().find(c=>c[0]==='config')[2].send_page_view,false);assert.equal(Array.isArray(s.window.dataLayer[0]),false);
});
test('repeated initialization does not duplicate a page view, actual navigation does',()=>{
  const s=setup({stored:{cookie_consent_v2:'accepted'}});s.tracking.syncTrackingConsent();s.tracking.trackCurrentPage();s.tracking.trackCurrentPage();s.tracking.syncTrackingConsent();s.tracking.trackCurrentPage();assert.equal(s.events().length,1);s.navigate('/produkte/nodex');s.tracking.trackCurrentPage();assert.equal(s.events().filter(e=>e[1]==='page_view').length,2);assert.equal(s.events().filter(e=>e[1]==='view_product').length,1);
});
test('page context excludes arbitrary query/hash and referrer details',()=>{
  const s=setup({stored:{cookie_consent_v2:'accepted'},path:'/kontakt?email=person@example.org#secret-name'});s.tracking.syncTrackingConsent();s.tracking.trackCurrentPage();const text=JSON.stringify(s.events());assert.doesNotMatch(text,/person@|referrer@|secret-name/);assert.equal(s.events()[0][2].page_location,'https://www.opny.ai/kontakt');assert.equal(s.events()[0][2].page_referrer,'https://example.org');
});
test('unknown routes do not masquerade as homepage views',()=>{const s=setup({stored:{cookie_consent_v2:'accepted'},path:'/private/person@example.org'});s.tracking.trackCurrentPage();assert.equal(s.events().length,0)});
test('withdrawal gates new events and regrant measures current route',()=>{
  const s=setup({stored:{cookie_consent_v2:'accepted'}});s.tracking.trackCurrentPage();s.consent.saveConsent('declined');s.tracking.syncTrackingConsent();s.tracking.trackLead('AuthenticTrust Demo');assert.equal(s.events().length,1);assert.equal(s.window['ga-disable-G-TEST123'],true);s.navigate('/produkte/nodex');s.navigate('/');s.consent.saveConsent('statistics');s.tracking.syncTrackingConsent();s.tracking.trackCurrentPage();assert.equal(s.events().length,2);
});
test('Meta-only configuration cannot grant Google advertising consent',()=>{
  const s=setup({meta:'123456789'});s.consent.saveConsent('all');s.tracking.syncTrackingConsent();const update=s.commands().filter(c=>c[0]==='consent'&&c[1]==='update').at(-1)[2];assert.equal(update.analytics_storage,'granted');assert.equal(update.ad_storage,'denied');
});
test('marketing withdrawal clears ad cookies while retaining Analytics cookies',()=>{
  const s=setup({ads:'AW-123456',meta:'123456789'});s.consent.saveConsent('statistics');s.tracking.syncTrackingConsent();assert.ok(s.deletions.some(x=>x.startsWith('_fbp=')));assert.ok(s.deletions.some(x=>x.startsWith('_gcl_aw=')));assert.equal(s.deletions.some(x=>x.startsWith('_ga=')),false);
});
test('Meta events are not queued before readiness or replayed after withdrawal',()=>{
  const s=setup({meta:'123456789'});s.document.referrer='';s.consent.saveConsent('marketing');s.tracking.syncTrackingConsent();s.tracking.trackCurrentPage();s.tracking.trackLead('AuthenticTrust Demo');assert.equal(s.window.fbq.queue.some(x=>x[0]==='track'),false);s.consent.saveConsent('declined');s.tracking.syncTrackingConsent();s.tracking.markMetaReady();assert.equal(s.window.fbq.queue.some(x=>x[0]==='track'),false);
});
test('Meta skips pages with unrecognized query or referrer contents',()=>{
  const s=setup({meta:'123456789',path:'/kontakt?email=person@example.org'});s.consent.saveConsent('marketing');assert.equal(s.tracking.safeMetaLocation(),false);s.tracking.markMetaReady();s.tracking.trackLead('AuthenticTrust Demo');assert.equal(s.window.fbq,undefined);
});
test('a telemetry exception cannot turn a delivered contact request into failure',()=>{
  const s=setup({stored:{cookie_consent_v2:'accepted'}});s.tracking.syncTrackingConsent();s.window.gtag=()=>{throw Error('telemetry')};assert.doesNotThrow(()=>s.tracking.trackLead('AuthenticTrust Demo'));
});
