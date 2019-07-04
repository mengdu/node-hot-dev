'use strict'
import Koa from 'koa'
import config from './config'
import loader from '../.dev/loader'

const app = new Koa()
const port = config.port

app.use(async (ctx, next) => {
  ctx.config = config

  await next()
})

// loader router
loader(app)

app.listen(port, function () {
  console.log('Listening on:', port)
})
