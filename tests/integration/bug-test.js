import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | bug', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#modal-dialog}}
        template block text
      {{/modal-dialog}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
