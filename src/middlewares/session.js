'use strict'
import config from '../config'

export default {
  use (app) {
    if (config.session) {
      const KoaSession = require('koa-session')
      var options = {
        cookie: config.cookie
      }
      if (config.redisSession) {
        var RedisStore = require('koa-redis')
        options.store = RedisStore(config.redisStore)
      }
      app.use(KoaSession(options , app))
    }
  }
}
