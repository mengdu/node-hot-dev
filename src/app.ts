import Koa from 'koa'
import favicon from 'koa-favicon'
import path from 'path'
import bodyparser from 'koa-bodyparser'
import RequestLog from './middlewares/request-log'
import router from './router'

const app = new Koa()

app.keys = ['123456789']

app.use(favicon(path.resolve(__dirname, '../favicon.ico')))
app.use(RequestLog)
app.use(bodyparser())
app.use(router.routes()).use(router.allowedMethods())

app.on('error', (err, ctx) => {
  console.error(err, ctx)
})

export default app
