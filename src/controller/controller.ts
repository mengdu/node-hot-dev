// eslint-disable-next-line no-unused-vars
import * as Koa from 'koa'
import { CODE, MSG } from '../utils/errcode'

export interface APIResponse {
  ret: number,
  msg: string,
  detail?: string,
  data?: any
}

export default class Controller {
  readonly context: Koa.Context;

  constructor (context: Koa.Context) {
    this.context = context
  }

  success (data?: any): APIResponse {
    return { ret: CODE.OK, msg: MSG[CODE.OK], data }
  }

  error (code: number, msg?: string, data?: any): APIResponse {
    const result: APIResponse = { ret: code, msg: MSG[code] }
    if (msg !== undefined) {
      result.detail = msg
    }

    if (data !== undefined) {
      result.data = data
    }

    return result
  }
}
