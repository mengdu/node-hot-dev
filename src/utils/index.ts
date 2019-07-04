'use strict'

export function isFun (val) {
  return typeof val === 'function'
}

export function isArr (val) {
  return Object.prototype.toString.call(val) === '[object Array]'
}

