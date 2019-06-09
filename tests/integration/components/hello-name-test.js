import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | hello-name', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{hello-name name='Mano'}}`);

    assert.equal(this.element.textContent.trim(), 'Hello Mano');

    // Template block usage:
    await render(hbs`
      {{#hello-name}}
        
      {{/hello-name}}
    `);

    assert.equal(this.element.textContent.trim(), 'Hello');
  });
});
