import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

module('Unit | Route | new', function(hooks) {
  setupTest(hooks, { resolver: engineResolverFor('ember-blog-engine') });

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:new');
    assert.ok(route);
  });
});
