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

const app = new Koa()
const port = config.port

app.use(logger())
app.use(async (ctx, next) => {
  ctx.config = config

  await next()
})

// gzip
app.use(compress({
  filter: function (content_type) {
    return /(html|javascript|image|css)/i.test(content_type)
  },
  threshold: 1024,
  flush: require('zlib').Z_SYNC_FLUSH
}))

app.use(favicon(path.resolve(__dirname, '../favicon.ico')))
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
