import config from 'config';
'use strict';

exports.test_config = function(req, res) {
  res.send(`Configuration: ${config.get('config')}\nItems per page: ${config.get('itemsPerPage')}\nuse cache: ${config.get('useCache')}\n`);
};
