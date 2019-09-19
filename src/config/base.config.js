'use strict'
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const env = process.env.NODE_ENV

export default {
  port: +process.env.PORT || 4000,
  env
}
