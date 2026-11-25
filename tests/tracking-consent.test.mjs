import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';
import ts from 'typescript';
function setup({ stored = {}, ads = '', meta = '', path = '/', blockedStorage = false, blockedWrites = false, revision = 'test-marketing-revision' } = {}) {
  const values = new Map(Object.entries(stored));
  const deletions = [];
  const document = { referrer: 'https://example.org/?email=referrer@example.org' };
  Object.defineProperty(document, 'cookie', { get: () => '_ga=1; _ga_TEST=2; _fbp=3; _gcl_aw=4', set: value => deletions.push(value) });
  const window = { location: new URL('https://www.opny.ai'+path), localStorage: { getItem: key => {if(blockedStorage) throw Error();return values.get(key)??null}, setItem: (key,value) => {if(blockedStorage||blockedWrites)throw Error();values.set(key,value)} }, dispatchEvent() {}, addEventListener() {}, removeEventListener() {} };
  const context = vm.createContext({ window, document, URL, Event, console, location: window.location });
  const modules = {};
  function load(name) {
    if (modules[name]) return modules[name];
    if (name === './tracking-config') return { GA_ID: 'G-TEST123', GOOGLE_ADS_ID: ads, META_PIXEL_ID: meta, HAS_MARKETING: Boolean(ads||meta), MARKETING_REVISION: revision };
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
  const s=setup({meta:'123456789'});s.document.referrer='';s.consent.saveConsent('marketing');s.tracking.syncTrackingConsent();s.tracking.trackCurrentPage();s.tracking.trackLead('AuthenticTrust Demo');assert.equal(s.window.fbq.queue.some(x=>['track','trackSingle'].includes(x[0])),false);s.consent.saveConsent('declined');s.tracking.syncTrackingConsent();s.tracking.markMetaReady();assert.equal(s.window.fbq.queue.some(x=>['track','trackSingle'].includes(x[0])),false);
});
test('Meta skips pages with unrecognized query or referrer contents',()=>{
  const s=setup({meta:'123456789',path:'/kontakt?email=person@example.org'});s.consent.saveConsent('marketing');assert.equal(s.tracking.safeMetaLocation(),false);s.tracking.markMetaReady();s.tracking.trackLead('AuthenticTrust Demo');assert.equal(s.window.fbq,undefined);
});
test('a telemetry exception cannot turn a delivered contact request into failure',()=>{
  const s=setup({stored:{cookie_consent_v2:'accepted'}});s.tracking.syncTrackingConsent();s.window.gtag=()=>{throw Error('telemetry')};assert.doesNotThrow(()=>s.tracking.trackLead('AuthenticTrust Demo'));
});

test('a loaded Meta Pixel revokes on unsafe navigation and resumes only on a safe location', () => {
  const s = setup({ meta: '123456789' });
  s.document.referrer = '';
  s.consent.saveConsent('all');
  s.tracking.syncTrackingConsent();
  const metaCommands = [];
  s.window.fbq.callMethod = (...args) => metaCommands.push(args);
  s.tracking.markMetaReady();
  assert.equal(metaCommands.filter(c => c[0] === 'trackSingle' && c[1] === '123456789' && c[2] === 'PageView').length, 1);
  s.navigate('/produkte/authentictrust?email=person@example.org#private-name');
  s.tracking.syncTrackingConsent();
  s.tracking.trackCurrentPage();
  s.tracking.trackLead('AuthenticTrust Demo');
  assert.equal(metaCommands.at(-1)[1], 'revoke');
  assert.equal(metaCommands.filter(c => c[0] === 'trackSingle').length, 1);
  assert.equal(s.consent.readConsent(), 'all');
  // The independently consented GA4 stream still receives a sanitized route.
  assert.equal(s.events().filter(e => e[1] === 'page_view').length, 2);
  assert.doesNotMatch(JSON.stringify(s.events()), /person@|private-name/);
  s.navigate('/produkte/authentictrust');
  s.tracking.syncTrackingConsent();
  s.tracking.trackCurrentPage();
  s.tracking.trackCurrentPage();
  assert.equal(metaCommands.filter(c => c[0] === 'init').length, 1);
  assert.equal(metaCommands.filter(c => c[0] === 'trackSingle' && c[1] === '123456789' && c[2] === 'PageView').length, 2);
  assert.equal(s.events().filter(e => e[1] === 'page_view').length, 2);
});

test('same-path unsafe hash and unknown routes revoke a loaded Pixel before any event', () => {
  const s = setup({ meta: '123456789' });
  s.document.referrer = '';
  s.consent.saveConsent('marketing');
  s.tracking.syncTrackingConsent();
  const metaCommands = [];
  s.window.fbq.callMethod = (...args) => metaCommands.push(args);
  s.tracking.markMetaReady();
  for (const path of ['/#private-name', '/private/person@example.org']) {
    s.navigate(path);
    s.tracking.trackCurrentPage();
    assert.equal(metaCommands.at(-1)[1], 'revoke');
    assert.equal(metaCommands.filter(c => c[0] === 'trackSingle').length, 1);
  }
  s.navigate('/#standards');
  s.tracking.trackCurrentPage();
  assert.equal(metaCommands.filter(c => c[0] === 'trackSingle' && c[1] === '123456789' && c[2] === 'PageView').length, 2);
  assert.equal(s.events().length, 0);
});

test('an initially unsafe URL never initializes Meta and a later safe URL honors the stored choice', () => {
  const s = setup({ meta: '123456789', path: '/kontakt?email=person@example.org' });
  s.document.referrer = '';
  s.consent.saveConsent('marketing');
  s.tracking.syncTrackingConsent();
  s.tracking.trackCurrentPage();
  assert.equal(s.window.fbq, undefined);
  s.navigate('/kontakt?interesse=AuthenticTrust%20Demo#anfrage');
  s.tracking.syncTrackingConsent();
  s.tracking.trackCurrentPage();
  assert.equal(s.window.fbq.queue.length, 0);
  s.tracking.markMetaReady();
  assert.equal(s.window.fbq.queue.filter(c => c[0] === 'init').length, 1);
  assert.equal(s.window.fbq.queue.filter(c => c[0] === 'trackSingle' && c[1] === '123456789' && c[2] === 'PageView').length, 1);
});

test('unsafe navigation during Meta loading cannot replay earlier consent or events', () => {
  const s = setup({ meta: '123456789' });
  s.document.referrer = '';
  s.consent.saveConsent('marketing');
  s.tracking.syncTrackingConsent();
  assert.equal(s.window.fbq.queue.length, 0);
  s.navigate('/?email=person@example.org');
  s.tracking.syncTrackingConsent();
  s.tracking.markMetaReady();
  assert.equal(s.window.fbq.queue.some(c => c[0] === 'init' || ['track','trackSingle'].includes(c[0])), false);
  assert.equal(s.window.fbq.queue.at(-1)[1], 'revoke');
  s.consent.saveConsent('declined');
  s.navigate('/');
  s.tracking.syncTrackingConsent();
  s.tracking.trackCurrentPage();
  assert.equal(s.window.fbq.queue.some(c => c[0] === 'init' || ['track','trackSingle'].includes(c[0])), false);
});


test('Meta disables SDK SPA hooks before readiness and sends only to the configured pixel', () => {
  const s = setup({ meta: '123456789' });
  s.document.referrer = '';
  s.consent.saveConsent('marketing');
  s.tracking.syncTrackingConsent();
  assert.equal(s.window.fbq.disablePushState, true);
  assert.equal(s.window.fbq.queue.length, 0);
  const commands = [];
  s.window.fbq.callMethod = (...args) => commands.push(args);
  s.tracking.markMetaReady();
  s.tracking.trackCurrentPage();
  s.navigate('/produkte/authentictrust');
  s.tracking.trackCurrentPage();
  s.tracking.trackCurrentPage();
  s.tracking.trackLead('AuthenticTrust Demo');
  const hits = commands.filter(c => ['track', 'trackSingle'].includes(c[0]));
  assert.deepEqual(hits.map(c => c.slice(0, 3)), [
    ['trackSingle', '123456789', 'PageView'],
    ['trackSingle', '123456789', 'PageView'],
    ['trackSingle', '123456789', 'Lead'],
  ]);
  assert.equal(hits[2][3].content_category, 'authentictrust');
});


test('Meta withdrawal discards recipient-specific pending events before regrant', () => {
  const s = setup({ meta: '123456789' });
  s.document.referrer = '';
  s.consent.saveConsent('marketing');
  s.tracking.syncTrackingConsent();
  s.window.fbq.queue.push(
    ['trackSingle', '123456789', 'Lead'],
    ['trackSingleCustom', '123456789', 'PrivateEvent'],
    ['consent', 'grant'],
  );
  s.consent.saveConsent('declined');
  s.tracking.syncTrackingConsent();
  assert.equal(s.window.fbq.queue.length, 1);
  assert.deepEqual(Array.from(s.window.fbq.queue[0]), ['consent', 'revoke']);
});


test('v3 positive marketing requires review while preserving the statistics decision', () => {
  for (const statistics of [false, true]) {
    const s = setup({ stored: { opny_consent_v3: JSON.stringify({ version: 3, statistics, marketing: true }) } });
    assert.equal(s.consent.readConsent(), statistics ? 'statistics' : 'declined');
    assert.equal(s.consent.needsMarketingReview(), true);
    assert.equal(s.consent.preferences(s.consent.readConsent()).marketing, false);
  }
});

test('v3 marketing denial is preserved without requiring a new marketing decision', () => {
  for (const statistics of [false, true]) {
    const s = setup({ stored: { opny_consent_v3: JSON.stringify({ version: 3, statistics, marketing: false }) } });
    assert.equal(s.consent.readConsent(), statistics ? 'statistics' : 'declined');
    assert.equal(s.consent.needsMarketingReview(), false);
  }
});

test('v4 grants marketing only for the current provider revision and renewed choice', () => {
  const record = { version: 4, statistics: true, marketing: true, marketingRevision: 'old-providers' };
  const s = setup({ stored: { opny_consent_v4: JSON.stringify(record) } });
  assert.equal(s.consent.readConsent(), 'statistics');
  assert.equal(s.consent.needsMarketingReview(), true);
  s.consent.saveConsent('all');
  assert.equal(s.consent.readConsent(), 'all');
  assert.equal(s.consent.needsMarketingReview(), false);
  assert.equal(JSON.parse(s.values.get('opny_consent_v4')).marketingRevision, 'test-marketing-revision');
});

test('v4 denial remains effective when provider revision changes and old approvals exist', () => {
  const s = setup({ stored: {
    opny_consent_v4: JSON.stringify({ version: 4, statistics: false, marketing: false, marketingRevision: 'old-providers' }),
    opny_consent_v3: JSON.stringify({ version: 3, statistics: true, marketing: true }),
    cookie_consent_v2: 'accepted',
  } });
  assert.equal(s.consent.readConsent(), 'declined');
  assert.equal(s.consent.needsMarketingReview(), false);
});

test('malformed v4 data cannot fall back to a former marketing approval', () => {
  const s = setup({ stored: {
    opny_consent_v4: JSON.stringify({ version: 4, statistics: true, marketing: 'yes' }),
    opny_consent_v3: JSON.stringify({ version: 3, statistics: true, marketing: true }),
  } });
  assert.equal(s.consent.readConsent(), null);
  assert.equal(s.consent.needsMarketingReview(), false);
});

test('a current in-memory choice overrides stale readable storage if writes are blocked', () => {
  const s = setup({ blockedWrites: true, stored: { opny_consent_v3: JSON.stringify({ version: 3, statistics: true, marketing: true }) } });
  assert.equal(s.consent.needsMarketingReview(), true);
  s.consent.saveConsent('declined');
  assert.equal(s.consent.readConsent(), 'declined');
  assert.equal(s.consent.needsMarketingReview(), false);
  s.consent.saveConsent('all');
  assert.equal(s.consent.readConsent(), 'all');
  assert.equal(s.consent.getServerMarketingReview(), false);
});

test('standard landing pages retain sanitized measurement and the existing product identity', () => {
  const s = setup();
  s.consent.saveConsent('statistics');
  s.tracking.syncTrackingConsent();
  for (const slug of ['iso-27001-software', 'iso-9001-software', 'nis2-software', 'soc-2-software', 'dsgvo-software']) {
    s.navigate(`/${slug}?email=private@example.org#private-name`);
    s.tracking.trackCurrentPage();
    s.tracking.trackCurrentPage();
    const views = s.events().filter(e => e[1] === 'page_view' && e[2].page_path === `/${slug}`);
    assert.equal(views.length, 1);
    assert.equal(views[0][2].page_location, `https://www.opny.ai/${slug}`);
    assert.notEqual(views[0][2].page_title, 'Seite nicht gefunden | Opny');
    const product = s.events().filter(e => e[1] === 'view_product' && e[2].page_path === `/${slug}`);
    assert.equal(product.length, 1);
    assert.equal(product[0][2].product, 'authentictrust');
  }
  assert.doesNotMatch(JSON.stringify(s.events()), /private@|private-name|email=/);
  s.consent.saveConsent('declined');
  const count = s.events().length;
  s.navigate('/iso-27001-software');
  s.tracking.trackCurrentPage();
  assert.equal(s.events().length, count);
});
