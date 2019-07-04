const path = require('path')
const fs = require('fs')
const camelcase = require('camelcase')

function loaderControllerFiles (dir, opt) {
  const dit = {}
  const files = fs.readdirSync(dir)
  
  for (let i = 0; i < files.length; i++) {
    const filename = files[i]
    const filepath = path.resolve(dir, filename)
    const stat = fs.statSync(filepath)
    const name = filename.replace(path.extname(filename), '')

    if (stat.isFile() && filename.endsWith(opt.extend)) {
      dit[camelcase(name)] = filepath
    } else {
      if (opt.isDeep) dit[camelcase(name)] = loaderController(filepath, opt)
      else continue
    }
  }

  return dit
}

function mkdir (dir) {
  if (!dir) return false
  const dirPaths = path.resolve(dir).split(path.sep)
  for (let i = 1; i <= dirPaths.length; i++) {
    const dirPath = path.resolve(dirPaths.slice(0, i).join('/'))

    try {
      const stat = fs.statSync(dirPath)
      if (stat.isDirectory()) {
        continue
      } else {
        throw new Error('')
      }
    } catch (err) {
      fs.mkdirSync(dirPath)
    }
  }
}

function isFun (val) {
  return typeof val === 'function'
}

module.exports = {
  loaderControllerFiles,
  mkdir,
  isFun
}
