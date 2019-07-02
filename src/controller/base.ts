'use strict'
import * as Koa from 'koa'

class BaseController {
  protected $ctx: Koa.Context
  constructor (ctx: Koa.Context) {
    this.$ctx = ctx
  }

  set body (data: any) {
    this.$ctx.body = data
  }
}

export default BaseController
