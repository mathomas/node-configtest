'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _testRoutes = require('./api/routes/testRoutes');

var _testRoutes2 = _interopRequireDefault(_testRoutes);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(),
    port = process.env.PORT || 3000;

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

(0, _testRoutes2.default)(app); //register the route


app.listen(port);

console.log('Test config RESTful API server started on: ' + port);