'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  use: function use(app) {
    console.log(_config2.default.session);
    if (_config2.default.session) {
      var KoaSession = require('koa-session');
      var options = {
        cookie: _config2.default.cookie
      };
      if (_config2.default.redisSession) {
        var RedisStore = require('koa-redis');
        options.store = RedisStore(_config2.default.redisStore);
      }
      app.use(KoaSession(options, app));
    }
  }
};