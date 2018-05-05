'use strict'
import path from 'path'
import {CommonError, ErrorType} from './error'
class Request {
  constructor (ctx) {
    let {params, query} = ctx
    let body = ctx.request.body || {}
    let {module, action = 'index'} = params
    // 优先从body取字段
    let args = {...query, ...body}

    // 从_site获取site
    this.site = args._site || ''
    this.query = query
    this.body = body
    this.params = params
    this.module = module
    this.action = action
    this.args = args
    this.entry = null
    this.ctx = ctx
    this.session = ctx.session

    this.loadModule()
  }

  loadModule () {

    let actionPath = [this.site, 'api', this.module].join('/').replace(/^\//, '')
    let filePath = path.resolve(__dirname, '../controller', actionPath)
    this.modulePath = filePath
    let module
    try {
      module = require(filePath).default
    } catch (err) {
      throw new CommonError(`Cannot find module '${this.module}'`, ErrorType.NOT_FOUND_MODULE)
    }
    this.entry = module[this.action]
  }
}

export default class {
  static factory (ctx) {
    // 构建一个请求
    return new Request(ctx)
  }
  static exec (req) {
    if (req.entry === 'undefined') {
      throw new CommonError('The entry is not found !', ErrorType.NOT_FOUND_MODULE)
    }
    if (typeof req.entry !== 'function') {
      throw new CommonError('The entry must be a function !', ErrorType.NOT_FOUND_MODULE)
    }
    return req.entry(req.args, req)
  }
}
