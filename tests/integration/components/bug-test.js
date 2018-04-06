import { moduleForComponent, test } from 'ember-qunit';
import config from 'engine-modal-bug/config/environment';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

moduleForComponent('bug', 'Integration | Component | bug', {
  integration: true,
  resolve: engineResolverFor('engine-modal-bug')
});

test('it renders', function(assert) {
  assert.equal(config.environment, 'test');
});
