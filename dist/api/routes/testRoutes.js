'use strict';

var _testController = require('../controllers/testController');

var _testController2 = _interopRequireDefault(_testController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

module.exports = function (app) {
  app.route('/config').get(_testController2.default.test_config);
};