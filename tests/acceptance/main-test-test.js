import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /main-test', async function(assert) {
    await visit('/');
    
    assert.equal(currentURL(), '/');

    await click('.blog-link')

    assert.equal(currentURL(), '/blog');
  });
});
