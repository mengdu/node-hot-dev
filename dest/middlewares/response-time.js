'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
        var start, delta, info;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        start = Date.now();
                        _context.next = 3;
                        return next();

                    case 3:
                        ctx.log.log('>> ' + ctx.method + ' ' + ctx.url);

                        delta = Math.ceil(Date.now() - start);
                        info = '<< ' + ctx.method + ' ' + ctx.status + ' ' + ctx.url + ' - ' + delta + ' ms';


                        ctx.set('X-Response-Time', delta + 'ms');

                        if (ctx.status > 400 && ctx.status < 500) {
                            ctx.log.warn(info);
                        } else if (ctx.status < 400) {
                            ctx.log.success(info);
                        } else {
                            ctx.log.error(info);
                        }

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();