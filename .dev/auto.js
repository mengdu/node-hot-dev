const path = require('path')
const fs = require('fs')
const utils = require('./utils')

const tyingsPath = 'src/typings'

function genereateControllerTyping (files) {
  const imports = []
  const code = []

  for (const key in files) {
    if (typeof files[key] !== 'object') {
      const ControllerName = key.replace(/\w/, e => e.toLocaleUpperCase())
      imports.push(`import ${ControllerName} from '../../controller/${key}'`)
      code.push(`${key}: ${ControllerName}`)
    } else {
      continue
    }
  }

  return { code, imports }
}

function main () {
  const files = utils.loaderControllerFiles(path.resolve('./src/controller'), { extend: '.ts', isDeep: true })
  const result = genereateControllerTyping(files)
  const code = `${result.imports.join('\n')}\n\nexport interface Controller {\n  ${result.code.join(';\n  ')};\n}`
  
  const controllerPath = path.resolve(tyingsPath, 'controller')
  utils.mkdir(controllerPath)

  fs.writeFileSync(path.resolve(controllerPath, 'index.d.ts'), code)
}

main()
