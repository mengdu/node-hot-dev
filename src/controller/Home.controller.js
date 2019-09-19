'use strict'
import { Controller } from '../utils/controller'
import { get, post } from '../utils/controller/decorators/methods'
import { sleep } from '../utils'

export default class HomeController extends Controller {
  @get('/')
  async index () {
    await sleep(1000)

    // this.json({ msg: 'Hi' })
    return this.say()
  }

  @post('/create')
  create () {}

  say () {
    return 'Hi'
  }
}
