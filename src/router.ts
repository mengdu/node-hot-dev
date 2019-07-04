'use strict'
import Router from 'koa-router'

export default function (app: { router: any; controller: any; }) {
  const { router, controller } = app

  router.get('/', controller.home.index)
  router.get('/test', controller.home.test)
}
