'use strict'
import Koa from 'koa'
import router from './router'
import config from './config'

const app = new Koa()
const port = config.port

app.use(async (ctx, next) => {
  ctx.config = config

  await next()
})

app.use(router.allowedMethods())
app.use(router.routes())

app.listen(port, function () {
  console.log('Listening on:', port)
})
