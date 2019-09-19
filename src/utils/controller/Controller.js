class Contoller {
  constructor (app, ctx) {
    this.$app = app
    this.$ctx = ctx
  }

  json (data) {
    this.$ctx.res.json(data)
  }

  send (data) {
    this.$ctx.res.send(data)
  }

  render (name, data) {
    this.$ctx.res.render(name, data)
  }
}

export default Contoller
