'use strict'
import BaseController from './base'

class HomeController extends BaseController {
  async index () {
    console.log('home.index')
    this.body = { msg: 'home.index' }
  }

  async test () {
    this.body = 'Hi'
  }
}

export default HomeController
