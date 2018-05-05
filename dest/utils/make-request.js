'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _error = require('./error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Request = function () {
  function Request(ctx) {
    _classCallCheck(this, Request);

    var params = ctx.params,
        query = ctx.query;

    var body = ctx.request.body || {};
    var module = params.module,
        _params$action = params.action,
        action = _params$action === undefined ? 'index' : _params$action;
    // 优先从body取字段

    var args = _extends({}, query, body);

    // 从_site获取site
    this.site = args._site || '';
    this.query = query;
    this.body = body;
    this.params = params;
    this.module = module;
    this.action = action;
    this.args = args;
    this.entry = null;
    this.ctx = ctx;
    this.session = ctx.session;

    this.loadModule();
  }

  _createClass(Request, [{
    key: 'loadModule',
    value: function loadModule() {

      var actionPath = [this.site, 'api', this.module].join('/').replace(/^\//, '');
      var filePath = _path2.default.resolve(__dirname, '../controller', actionPath);
      this.modulePath = filePath;
      var module = void 0;
      try {
        module = require(filePath).default;
      } catch (err) {
        throw new _error.CommonError('Cannot find module \'' + this.module + '\'', _error.ErrorType.NOT_FOUND_MODULE);
      }
      this.entry = module[this.action];
    }
  }]);

  return Request;
}();

var _default = function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, null, [{
    key: 'factory',
    value: function factory(ctx) {
      // 构建一个请求
      return new Request(ctx);
    }
  }, {
    key: 'exec',
    value: function exec(req) {
      if (req.entry === 'undefined') {
        throw new _error.CommonError('The entry is not found !', _error.ErrorType.NOT_FOUND_MODULE);
      }
      if (typeof req.entry !== 'function') {
        throw new _error.CommonError('The entry must be a function !', _error.ErrorType.NOT_FOUND_MODULE);
      }
      return req.entry(req.args, req);
    }
  }]);

  return _default;
}();

exports.default = _default;