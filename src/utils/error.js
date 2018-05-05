'use strict'

class CommonError extends Error {
  constructor (msg, type = ErrorType.UNKNOW_ERROR, error) {
    super(msg, type.code)
    this.msg = msg
    this.ret = type.code
    this.type = type.type
    this.status = type.status
    this.error = error
  }
}

const ErrorType = {
  OK: {
    type: 'OK',
    code: 0
  },
  UNKNOW_ERROR: {
    type: 'UNKNOW_ERROR',
    code: 1001
  },
  NO_AUTH: {
    type: 'NO_AUTH',
    code: 1002,
    status: 403
  },
  PARAMS_ERROR: {
    type: 'PARAMS_ERROR',
    code: 2001
  },
  NOT_FOUND_MODULE: {
    type: 'NOT_FOUND_MODULE',
    code: 4001,
    status: 404
  },
  SYSTEM_ERROR: {
    type: 'SYSTEM_ERROR',
    code: 5000,
    status: 500
  }
}

export {
  CommonError,
  ErrorType
}
