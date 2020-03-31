// eslint-disable-next-line no-unused-vars
import * as Koa from 'koa'
import Router from 'koa-router'
import controllers from './controller'
import { getMeta } from './utils/meta'
import { ROUTER_LIST_KEY } from './constants'

const router = new Router()

router.get('/ping', ctx => {
  ctx.body = 'Pong'
})

function wrapper (Controller: any, action: string) {
  return async (ctx: Koa.Context, next: Koa.Next) => {
    const instance = new Controller(ctx)
    const result = await instance[action](instance, next)

    ctx.body = result
  }
}

function autoRegisterRouter (ctrls: any[]) {
  for (const i in ctrls) {
    const Controller = ctrls[i]
    const routes: { fnName: string, method: string, path: string }[] = getMeta(ROUTER_LIST_KEY, Controller.prototype)

    for (const j in routes) {
      const route = routes[j]
      if (route.method === 'ANY') {
        router.all(route.path, wrapper(Controller, route.fnName))
      } else {
        router.register(route.path, [route.method], wrapper(Controller, route.fnName))
      }
    }
  }
}

autoRegisterRouter(controllers)

export default router
