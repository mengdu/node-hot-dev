// eslint-disable-next-line no-unused-vars
import * as Koa from 'koa'

const chalk = require('chalk')

function toMethod (type: string) {
  switch (type.toLowerCase()) {
    case 'get': return chalk.cyan(type)
    case 'post': return chalk.yellow(type)
    case 'delete': return chalk.red(type)
    case 'put': return chalk.blue(type)
    default: return type
  }
}

function toStatus (val: number) {
  switch (val + '') {
    case '200': return chalk.green(val)
    case '404': return chalk.red(val)
    case '505': return chalk.red(val)
    default: return chalk.gray(val)
  }
}

export default async function log (ctx: Koa.Context, next: Koa.Next) {
  const start = Date.now()

  await next()

  const ms = Date.now() - start

  const info = `${toMethod(ctx.method)} ${toStatus(ctx.status)} ${ctx.url} - ${chalk.magenta(ms)} ms`

  console.log(info)
}
