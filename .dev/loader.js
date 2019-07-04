const path = require('path')
const Router = require('koa-router')
const utils = require('./utils')

function loadController (app, dir) {
  const controllers = utils.loaderControllerFiles(path.resolve(dir), { extend: '.ts', isDeep: true })
  const dit = {}

  for (const key in controllers) {
    dit[key] = wrapClass(require(controllers[key]).default, app)
  }

  return dit
}

// copy from egg-core
function wrapClass (Controller, app) {

  let proto = Controller.prototype
  const ret = {}

  while (proto !== Object.prototype) {
    const keys = Object.getOwnPropertyNames(proto)
    for (const key of keys) {
      if (key === 'constructor') {
        continue
      }
      // skip getter, setter & non-function properties
      const d = Object.getOwnPropertyDescriptor(proto, key)
      if (utils.isFun(d.value) && !ret.hasOwnProperty(key)) {
        ret[key] = methodToMiddleware(Controller, key, app)
      }
    }
    proto = Object.getPrototypeOf(proto)
  }
  return ret
}

function methodToMiddleware(Controller, key, app) {
  return async function classControllerMiddleware(ctx, next) {
    const controller = new Controller({ app, ctx })

    try {
      await controller[key]()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = function loader (app, options) {
  options = { controllerDir: 'src/controller', routerFile: '../src/router', ...options }
  const router = new Router()
  const loadRouter = require(options.routerFile).default

  loadRouter({ router: router, controller: loadController(app, options.controllerDir), application: app })
  app.use(router.routes()).use(router.allowedMethods())
}
