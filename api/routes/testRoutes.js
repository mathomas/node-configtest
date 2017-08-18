import testController from '../controllers/testController';
'use strict';

module.exports = function(app) {
  app.route('/config')
    .get(testController.test_config);
};
