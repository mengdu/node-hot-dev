'use strict'
import KoaRouter from 'koa-router'
import MakeRequest from '../utils/make-request'
import Response from '../utils/response'
import {CommonError, ErrorType} from '../utils/error'

const router = new KoaRouter()

router.get('/', async ctx => {
  ctx.body = 'wellcome to here!'
})

router.get('/api', async ctx => {
  ctx.body = 'blog-server v1.0.0'
})

router.all('/session', async ctx => {
  ctx.session.view = ctx.session.view ? ctx.session.view + 1 : 1
  ctx.log.log(ctx.session)
  ctx.body = {session: ctx.session}
})

router.all('/api/:module/:action?', async (ctx, next) => {
  let res = new Response()
  // handle options request
  if (ctx.method.toLowerCase() === 'options') {
    ctx.body = 'allow post'
    await next()
    return true
  }
  let error = null
  try {
    let req = MakeRequest.factory(ctx)
    res.result = await MakeRequest.exec(req)
  } catch (err) {
    ctx.log.error(err)
    if (!(err instanceof CommonError)) {
      error = new CommonError(err.message, ErrorType.UNKNOW_ERROR)
    } else {
      error = err
    }
  }

  if (error) {
    res.ret = error.ret
    res.msg = error.msg
    res.type = error.type
    if (typeof error.status !== 'undefined') {
      ctx.status = error.status
    }
  }
  ctx.body = res

  return await next()
})

export default router
