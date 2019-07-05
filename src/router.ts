'use strict'
import Router from 'koa-router'
import { App } from './typings';

export default function (app: { router: Router; controller: App.Controller; }) {
  const { router, controller } = app

  router.get('/', controller.home.index)
  router.get('/test', controller.home.test)
}
