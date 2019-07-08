'use strict'
import * as Koa from 'koa'
import url from 'url'

function acceptsHtml (head, accepts) {
  for (let i = 0; i < accepts.length; i++) {
    if (head.indexOf(accepts[i]) !== -1) return true
  }

  return false
}

export default function historyFallback (options: { index?: string }) {
  return function (ctx: Koa.Context, next: () => void) {
    if (ctx.method !== 'GET') return next()
    if (!ctx.headers || typeof ctx.headers.accept !== 'string') return next()
    if (ctx.headers.accept.indexOf('application/json') === 0) return next()
    if (!acceptsHtml(ctx.headers.accept, ['text/html', '*/*'])) return next()

    const uri = url.parse(ctx.url)

    if ((<string>uri.pathname).lastIndexOf('.') > (<string>uri.pathname).lastIndexOf('/')) {
      return next()
    }

    ctx.url = options.index || '/index.html'
    console.log(1, ctx.path, ctx.url)
    return next()
  }
}
