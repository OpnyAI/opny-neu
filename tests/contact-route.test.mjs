import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';
import * as crypto from 'node:crypto';
import ts from 'typescript';

// Exercise the real route validation and response flow without sending email.
function loadRoute({ failDelivery = false } = {}) {
  const emails = [];
  const source = ts.transpileModule(fs.readFileSync('src/app/api/nodex-contact/route.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2021 },
  }).outputText;
  const exports = {};
  vm.runInNewContext(source, {
    exports,
    process: { env: {} },
    console: { error() {}, warn() {} },
    require(name) {
      if (name === 'next/server') return { NextResponse: { json: (body, init = {}) => ({ body, status: init.status ?? 200 }) } };
      if (name === '@/lib/contact-interest') return {
        contactInterests: ['AuthenticTrust Demo', 'NodeX Einsatz', 'Allgemeine Anfrage'],
        normalizeContactInterest: value => value === 'TrustArch Demo' ? 'AuthenticTrust Demo' : value,
      };
      if (name === '@/lib/contact-email') return {
        readContactEmailConfig: () => ({ apiKey: 'test-only', to: 'team@example.invalid', from: 'website@example.invalid' }),
        sendResendEmail: async email => { if (failDelivery) throw Error('test_provider_failure'); emails.push(email); },
      };
      if (name === 'node:crypto') return crypto;
      throw Error(`Unexpected dependency: ${name}`);
    },
  });
  return { post: exports.POST, emails };
}
function request(overrides = {}) {
  return { headers: new Headers({ 'x-forwarded-for': '192.0.2.1' }), json: async () => ({
    name: 'Demo Test', company: 'Example', email: 'demo@example.invalid',
    companySize: '1-50 Mitarbeitende', interest: 'AuthenticTrust Demo',
    privacy: true, renderedAt: String(Date.now() - 10000), ...overrides,
  }) };
}
test('fast requests ask the visitor to retry and never claim delivery', async () => {
  const { post, emails } = loadRoute();
  const response = await post(request({ renderedAt: String(Date.now()) }));
  assert.equal(response.status, 429);
  assert.equal(response.body.ok, false);
  assert.equal(response.body.error, 'too_fast');
  assert.equal(emails.length, 0);
});
test('valid demo reaches delivery and confirmation with legacy interest normalized', async () => {
  const { post, emails } = loadRoute();
  const response = await post(request({ interest: 'TrustArch Demo' }));
  assert.equal(response.body.ok, true);
  assert.equal(emails.length, 2);
  assert.match(emails[0].subject, /AuthenticTrust Demo/);
  assert.equal(emails[0].replyTo, 'demo@example.invalid');
  assert.equal(emails[1].to, 'demo@example.invalid');
});
test('provider failure does not produce success', async () => {
  const { post } = loadRoute({ failDelivery: true });
  const response = await post(request());
  assert.equal(response.status, 502);
  assert.equal(response.body.ok, false);
});
