'use strict'
export default {
  async index (options) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('User home')
      }, 1000)
    })
  },
  async list (options) {
    return [
      {
        id: 10001,
        name: 'admin',
        nickName: '管理员'
      }
    ]
  },
  title: 'xxx'
}
