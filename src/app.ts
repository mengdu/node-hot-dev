'use strict'
import Koa from 'koa'
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

// loader router
loader(app)

app.use(async function (ctx, next) {

})

app.on('error', (err, ctx) => {
  console.error(err, ctx)
})

app.listen(port, function () {
  console.log('Listening on:', port)
})
