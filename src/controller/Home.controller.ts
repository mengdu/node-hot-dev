import BaseController from './Base.controller'
import { get, post, any } from '../decorators'

class HomeController extends BaseController {
  @any('/')
  async index () {
    // console.log(this.context.query)
    return 'Hi!'
  }

  @post('/post')
  async handlePost () {
    return this.context.request.body
  }

  @get('/home')
  async home () {
    return 'Home'
  }
}

export default HomeController
