'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaMount = require('koa-mount');

var _koaMount2 = _interopRequireDefault(_koaMount);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  use: function use(app) {
    _config2.default.statics.forEach(function (item) {
      app.use((0, _koaMount2.default)(item.prefix, (0, _koaStatic2.default)(item.dest, item.options || {})));
    });
  }
};