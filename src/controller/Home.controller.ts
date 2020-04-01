// eslint-disable-next-line no-unused-vars
import Controller, { APIResponse } from './controller'
import { get, post, any } from '../decorators'
import { CODE } from '../utils/errcode'

class HomeController extends Controller {
  @any('/')
  async index () {
    // console.log(this.context.query)
    return 'Hi!'
  }

  @post('/post')
  async handlePost (): Promise<APIResponse> {
    return { ret: 0, msg: 'ok', data: this.context.request.body }
  }

  @get('/test')
  async home (): Promise<APIResponse> {
    if (!this.context.query.id) {
      return this.error(CODE.INVALID_PARAMS, undefined, { query: this.context.query })
    } else {
      return this.success()
    }
  }
}

export default HomeController
