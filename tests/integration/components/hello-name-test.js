import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

module('Integration | Component | hello-name', function(hooks) {
  setupRenderingTest(hooks, { resolver: engineResolverFor('ember-blog-engine') });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{hello-name name='Michael'}}`);

    assert.equal(this.element.textContent.trim(), 'Hello Michael');

    // Template block usage:
    await render(hbs`
      {{#hello-name}}

      {{/hello-name}}
    `);

    assert.equal(this.element.textContent.trim(), 'Hello');
  });
});
