'use strict'

export default async function (ctx, next) {
    const start = Date.now()

    await next()
    ctx.log.log(`>> ${ctx.method} ${ctx.url}`)

    var delta = Math.ceil(Date.now() - start)

    var info = `<< ${ctx.method} ${ctx.status} ${ctx.url} - ${delta} ms`

    ctx.set('X-Response-Time', delta + 'ms')

    if (ctx.status > 400 && ctx.status < 500) {
        ctx.log.warn(info)
    } else if (ctx.status < 400) {
        ctx.log.success(info)
    } else {
        ctx.log.error(info)
    }
}
