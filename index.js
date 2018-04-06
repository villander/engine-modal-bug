/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'engine-modal-bug',

  lazyLoading: {
    enabled: false,
    includeRoutesInApplication: true
  }
});
