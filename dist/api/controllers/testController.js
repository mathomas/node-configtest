'use strict';

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

exports.test_config = function (req, res) {
  res.send('Configuration: ' + _config2.default.get('config') + '\nItems per page: ' + _config2.default.get('itemsPerPage') + '\nuse cache: ' + _config2.default.get('useCache') + '\n');
};