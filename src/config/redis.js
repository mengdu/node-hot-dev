'use strict'

export default {
  session: {
    host: process.env.SESSION_REDIS_HOST || 'localhost',
    port: process.env.SESSION_REDIS_PORT ||  '6379',
    pass: process.env.SESSION_REDIS_PASS || '123456',
    ttl: process.env.SESSION_REDIS_TTL || 60 * 60 * 24 * 1,
    db: Number(process.env.SESSION_REDIS_DB) || 0
  }
}
