'use strict'
import BaseController from './base'

class HomeController extends BaseController {
  async index () {
    this.body = 'Hi !\nServer on Koa.'
  }

  async test () {
    throw new Error('xxx')
    this.body = 'Hi'
  }
}

export default HomeController
