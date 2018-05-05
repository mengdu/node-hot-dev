'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _makeRequest = require('../utils/make-request');

var _makeRequest2 = _interopRequireDefault(_makeRequest);

var _response = require('../utils/response');

var _response2 = _interopRequireDefault(_response);

var _error = require('../utils/error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = new _koaRouter2.default();

router.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.body = 'wellcome to here!';

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

router.get('/api', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ctx.body = 'blog-server v1.0.0';

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

router.all('/session', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            ctx.session.view = ctx.session.view ? ctx.session.view + 1 : 1;
            ctx.log.log(ctx.session);
            ctx.body = { session: ctx.session };

          case 3:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}());

router.all('/api/:module/:action?', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(ctx, next) {
    var res, error, req;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res = new _response2.default();
            // handle options request

            if (!(ctx.method.toLowerCase() === 'options')) {
              _context4.next = 6;
              break;
            }

            ctx.body = 'allow post';
            _context4.next = 5;
            return next();

          case 5:
            return _context4.abrupt('return', true);

          case 6:
            error = null;
            _context4.prev = 7;
            req = _makeRequest2.default.factory(ctx);
            _context4.next = 11;
            return _makeRequest2.default.exec(req);

          case 11:
            res.result = _context4.sent;
            _context4.next = 18;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4['catch'](7);

            ctx.log.error(_context4.t0);
            if (!(_context4.t0 instanceof _error.CommonError)) {
              error = new _error.CommonError(_context4.t0.message, _error.ErrorType.UNKNOW_ERROR);
            } else {
              error = _context4.t0;
            }

          case 18:

            if (error) {
              res.ret = error.ret;
              res.msg = error.msg;
              res.type = error.type;
              if (typeof error.status !== 'undefined') {
                ctx.status = error.status;
              }
            }
            ctx.body = res;

            _context4.next = 22;
            return next();

          case 22:
            return _context4.abrupt('return', _context4.sent);

          case 23:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[7, 14]]);
  }));

  return function (_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}());

exports.default = router;