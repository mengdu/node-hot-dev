// eslint-disable-next-line no-unused-vars
import * as Koa from 'koa'

export default class BaseController {
  readonly context: Koa.Context;

  constructor (context: Koa.Context) {
    this.context = context
  }
}
