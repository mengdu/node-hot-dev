'use strict'
import Koa from 'koa'
import router from './router'
import logger from './middlewares/response-log'
import KoaStatic from 'koa-static'
import bodyparser from 'koa-bodyparser'
import mount from 'koa-mount'
import favicon from 'koa-favicon'
import compress from 'koa-compress'
import path from 'path'
const app = new Koa()
const port = process.env.PORT || 3000

// 错误捕获
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

app.use(logger({
  isDev: process.env.NODE_ENV !== 'production'
}))

// gzip
app.use(compress({
  filter: function (contentType) {
    return /(html|javascript|image|css)/i.test(contentType)
  },
  threshold: 1024,
  flush: require('zlib').Z_SYNC_FLUSH
}))

// favicon.ico
app.use(favicon(path.resolve(__dirname, '../favicon.ico')))

// static
app.use(mount('/static', KoaStatic(path.resolve(__dirname, '../public'), { maxage: 30 * 24 * 60 * 60 })))

// bodyparser
app.use(bodyparser())

app.use(router.routes()).use(router.allowedMethods())

// 错误处理
app.on('error', (err, ctx) => {
  console.error(err, ctx)
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

export default app
