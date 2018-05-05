'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

exports.default = {
  title: 'this is test.',
  info: 'this is test',
  say: function say() {
    console.log('say');
  },

  // fs,
  resolve: _path.resolve
};