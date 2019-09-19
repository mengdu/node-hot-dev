import IController from './Controller'
import { getMetadata } from './meta'

const actionWrapper = (Controller, action, app) => {
  return async function (req, res, next) {
    try {
      const controller = new Controller(app, { req, res })
      const params = {
        query: req.query,
        params: req.params,
        body: req.body
      }

      const result = await controller[action](params, next)

      if (!controller.$ctx.res.finished) {
        if (typeof result === 'object') {
          res.json(result)
        } else {
          res.send(result)
        }
      }
    } catch (err) {
      next(err)
    }
  }
}

export function factoryController (app, router, contollers, logable) {
  for (const key in contollers) {
    const Controller = contollers[key]

    if (!(Controller.prototype instanceof IController)) {
      throw new Error(`Contoller '${Controller.name}' must be inherit to 'Contoller'`)
    }

    const actions = Object.getOwnPropertyNames(Controller.prototype)

    for (const i in actions) {
      const action = actions[i]

      if (action === 'constructor' || typeof Controller.prototype[action] !== 'function') continue

      const route = getMetadata(action, Controller.prototype)

      if (!route) continue

      logable && console.log(`[R:${Controller.name}]`, route.methods.join(','), route.path, '-', action)

      for (const j in route.methods) {
        router[route.methods[j].toLocaleLowerCase()](route.path, actionWrapper(Controller, action, app))
      }
    }
  }

  return router
}
