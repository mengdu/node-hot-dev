'use strict'
import app from './app'

app.listen(3000)


app.log.log('start at:', new Date())
app.log.log('NODE_ENV:', process.env.NODE_ENV)
app.log.log('listening on 3000')

export default app
