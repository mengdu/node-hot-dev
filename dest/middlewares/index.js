'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mount = require('./mount');

var _mount2 = _interopRequireDefault(_mount);

var _responseTime = require('./response-time');

var _responseTime2 = _interopRequireDefault(_responseTime);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _session = require('./session');

var _session2 = _interopRequireDefault(_session);

var _static = require('./static');

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_mount2.default, _responseTime2.default, _error2.default, _session2.default, _static2.default];