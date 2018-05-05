'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _redis = require('./redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config({
  path: _path2.default.resolve(__dirname, '../../.env')
});

exports.default = {
  key: process.env.APP_KEY || 'MTIzNDU2Nzg5MA==',
  // 开启session
  session: !!process.env.SESSION,
  // 开启redis session
  redisSession: !!process.env.REDIS_SESSION,
  redisStore: _redis2.default.session,
  cookie: {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false
  },
  statics: [{
    prefix: '/public',
    dest: _path2.default.resolve(__dirname, '../public'),
    options: {
      maxage: 365 * 24 * 60 * 60
    }
  }],
  log: {
    server: {
      categorie: 'server',
      debug: false
    },
    http: {
      categorie: 'http',
      debug: false,
      date: true
    }
  }
};