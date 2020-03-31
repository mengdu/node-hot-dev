import app from './app'

const port = parseInt(process.env.PORT || '') || 4000

app.listen(port, () => {
  console.log('Listening on:', port)
})
