'use strict'
import Router from 'koa-router'

const router = new Router()

router.get('/', function (ctx) {
  ctx.body = 'Hi !\nWellcome here.'
})

export default router
