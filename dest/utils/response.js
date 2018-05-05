'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Response = function Response() {
  var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  _classCallCheck(this, Response);

  this.ret = ret;
  this.msg = msg;
  this.result = result;
  this.time = Date.now();
  this.type = '';
};

exports.default = Response;