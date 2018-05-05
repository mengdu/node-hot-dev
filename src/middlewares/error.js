'use strict'
export default async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.log.error(err)
    ctx.status = 500
    ctx.body = {
      bool: false,
      code: 500,
      msg: err.message,
      result: null
    }
    ctx.app.emit('error', err, ctx)
  }
}