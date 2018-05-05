'use strict'
import path from 'path'
import redis from './redis'
import pkg from '../../package.json'

require('dotenv').config({
  path: path.resolve(__dirname, '../../.env')
})

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

export default {
  pkg,
  key: process.env.APP_KEY || 'MTIzNDU2Nzg5MA==',
  // 开启session
  session: !!process.env.SESSION,
  // 开启redis session
  redisSession: !!process.env.REDIS_SESSION,
  redisStore: redis.session,
  cookie: {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
  },
  statics: [
    {
      prefix: '/public',
      dest: path.resolve(__dirname, '../public'),
      options: {
        maxage: 365 * 24 * 60 * 60
      }
    }
  ],
  log: {
    server: {
      categorie: 'server',
      debug: false
    },
    http: {
      categorie: 'http',
      debug: false,
      date: true
    }
  }
}
