'use strict'
import BaseController from './base'

class HomeController extends BaseController {
  index () {
    this.body = { msg: 'home.index' }
  }
}

export default HomeController
