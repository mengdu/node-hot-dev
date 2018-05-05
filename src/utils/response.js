'use strict'
export default class Response {
  constructor (ret = 0, result = {}, msg = '') {
    this.ret = ret
    this.msg = msg
    this.result = result
    this.time = Date.now()
    this.type = ''
  }
}
