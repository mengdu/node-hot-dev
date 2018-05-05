'use'
import Bugjs from 'node-bugjs'
import config from '../config'

export default async function (ctx, next) {
  ctx.config = config
  ctx.log = new Bugjs(config.log.http)
  return next()
}
