import { moduleForComponent, test } from 'ember-qunit';
import config from 'ember-blog-engine/config/environment';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

moduleForComponent('bug', 'Integration | Component | bug', {
  integration: true,
  resolve: engineResolverFor('ember-blog-engine')
});

test('it renders', function(assert) {
  assert.equal(config.environment, 'test');
});
