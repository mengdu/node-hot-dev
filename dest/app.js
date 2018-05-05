'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _nodeBugjs = require('node-bugjs');

var _nodeBugjs2 = _interopRequireDefault(_nodeBugjs);

var _koaFavicon = require('koa-favicon');

var _koaFavicon2 = _interopRequireDefault(_koaFavicon);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

app.keys = [_config2.default.key, 'koa project'];
app.log = new _nodeBugjs2.default(_config2.default.log.server);

// load middlewares
_middlewares2.default.forEach(function (fn) {
  if (typeof fn.use === 'function') {
    fn.use(app);
  } else {
    app.use(fn);
  }
});

// post解析，不支持文件上传
app.use((0, _koaBodyparser2.default)());

app.use((0, _koaFavicon2.default)('./favicon.ico'));

// load router
app.use(_router2.default.routes());
app.use(_router2.default.allowedMethods());

exports.default = app;