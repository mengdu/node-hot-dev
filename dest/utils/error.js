'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonError = function (_Error) {
  _inherits(CommonError, _Error);

  function CommonError(msg) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ErrorType.UNKNOW_ERROR;
    var error = arguments[2];

    _classCallCheck(this, CommonError);

    var _this = _possibleConstructorReturn(this, (CommonError.__proto__ || Object.getPrototypeOf(CommonError)).call(this, msg, type.code));

    _this.msg = msg;
    _this.ret = type.code;
    _this.type = type.type;
    _this.status = type.status;
    _this.error = error;
    return _this;
  }

  return CommonError;
}(Error);

var ErrorType = {
  OK: {
    type: 'OK',
    code: 0
  },
  UNKNOW_ERROR: {
    type: 'UNKNOW_ERROR',
    code: 1001
  },
  NO_AUTH: {
    type: 'NO_AUTH',
    code: 1002,
    status: 403
  },
  PARAMS_ERROR: {
    type: 'PARAMS_ERROR',
    code: 2001
  },
  NOT_FOUND_MODULE: {
    type: 'NOT_FOUND_MODULE',
    code: 4001,
    status: 404
  },
  SYSTEM_ERROR: {
    type: 'SYSTEM_ERROR',
    code: 5000,
    status: 500
  }
};

exports.CommonError = CommonError;
exports.ErrorType = ErrorType;