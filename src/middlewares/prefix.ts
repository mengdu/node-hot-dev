export default function prefix (path, fn) {
  return function (ctx, next) {
    if (ctx.path.indexOf(path) === 0) return fn(ctx, next)

    return next()
  }
}