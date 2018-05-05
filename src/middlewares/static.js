'use strict'
import KoaMount from 'koa-mount'
import KoaStatic from 'koa-static'
import config from '../config'

export default {
  use (app) {
    config.statics.forEach(item => {
      app.use(KoaMount(item.prefix, KoaStatic(item.dest, item.options || {})))
    })
  }
}

