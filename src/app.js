'use strict'
import path from 'path'
import Koa from 'koa'
import Bugjs from 'node-bugjs'
import favicon from 'koa-favicon'
import Bodyparser from 'koa-bodyparser'
import config from './config'
import router from './router'
import middlewares from './middlewares'

const app = new Koa()

app.keys = [config.key, 'koa project']
app.log = new Bugjs(config.log.server)

app.log.log('server name:', config.pkg.name)
// load middlewares
middlewares.forEach(fn => {
  if (typeof fn.use === 'function') {
    fn.use(app)
  } else {
    app.use(fn)
  }
})

// post解析，不支持文件上传
app.use(Bodyparser())

app.use(favicon('./favicon.ico'))

// load router
app.use(router.routes())
app.use(router.allowedMethods())

export default app