import express from 'express'
import { factoryController } from './utils/controller'
import controllers from './controller'

const router = express.Router()

// router.get('/', (req, res) => {
//   res.send('Hi')
// })

export default (app) => {
  factoryController(app, router, controllers, true)

  app.use(router)
}
