'use strict'
export default {
  async index (options, req) {
    let {query, body, params, args} = req
    return {query, body, params, args}
  },
  async test (options, req) {
    throw new Error('xxxx')
    return {}
  },
  async session (options, req) {
    return req.session
  }
}
