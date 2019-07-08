'use strict'
import Koa from 'koa'
import KoaStatic from 'koa-static'
import bodyparser from 'koa-bodyparser'
import mount from 'koa-mount'
import favicon from 'koa-favicon'
import compress from 'koa-compress'
import path from 'path'
import config from './config'
import loader from '../.dev/loader'
import logger from './middlewares/resquest-log'
import prefix from './middlewares/prefix'
import historyFallback from './middlewares/history-fallback'
// import historyFallback from '../demo'

const app = new Koa()
const port = config.port

app.use(logger())
app.use(async (ctx, next) => {
  ctx.config = config

  await next()
})

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

// gzip
app.use(compress({
  filter: function (content_type) {
    return /(html|javascript|image|css)/i.test(content_type)
  },
  threshold: 1024,
  flush: require('zlib').Z_SYNC_FLUSH
}))

// favicon.ico
app.use(favicon(path.resolve(__dirname, '../favicon.ico')))

app.use(prefix('/dist', historyFallback({
  index: '/static/dist/index.html'
})))

// static
app.use(mount('/static', KoaStatic(path.resolve(__dirname, '../public'), { maxage: 30 * 24 * 60 * 60 })))

// bodyparser
app.use(bodyparser())

// loader router
loader(app)

app.on('error', (err, ctx) => {
  console.error(err, ctx)
})

app.listen(port, function () {
  console.log('Listening on:', port)
})
