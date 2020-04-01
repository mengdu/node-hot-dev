/* eslint-disable no-unused-vars */
export enum CODE {
  OK = 0,
  UNKNOWN = -1,
  INVALID_PARAMS = 200
}

export const MSG: {
  [key: number]: string
} = {
  [CODE.OK]: 'ok',
  [CODE.UNKNOWN]: 'unknown',
  [CODE.INVALID_PARAMS]: 'Invalid params'
}
