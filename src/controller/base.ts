'use strict'
import * as Koa from 'koa'

class BaseController {
  protected ctx: Koa.Context
  protected application: Koa

  constructor (options: { ctx: Koa.Context, app: Koa }) {
    this.ctx = options.ctx
    this.application = options.app
  }

  set body (data: any) {
    this.ctx.body = data
  }
}

export default BaseController
