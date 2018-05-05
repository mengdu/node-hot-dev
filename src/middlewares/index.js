'use strict'
import mount from './mount'
import responseTime from './response-time'
import error from './error'
import session from './session'
import staticMiddleware from './static'


export default [
  mount,
  responseTime,
  error,
  session,
  staticMiddleware
]
