import TestConfig from './test.config'
import DevConfig from './dev.config'
import ProdConfig from './prod.config'

const config = {
  test: TestConfig,
  dev: DevConfig,
  development: DevConfig,
  prod: ProdConfig,
  production: ProdConfig
}

export const get = (env = '') => {
  return config[env || process.env.NODE_ENV]
}
