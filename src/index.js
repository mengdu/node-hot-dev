'use strict'
import app from './app'
import { format } from './utils'

app.listen(app.config.port, () => {
  console.log('env:', app.config.env)
  console.log('startAt:', format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
  console.log('Listening on:', app.config.port)
})
