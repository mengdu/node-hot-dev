import { getMeta, setMeta } from '../utils/meta'
import { ROUTER_LIST_KEY } from '../constants'

declare type HTTP_METHOED = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'ANY'

export function method (type: HTTP_METHOED, path: string) {
  return function (target: any, property: string) {
    const routers = getMeta(ROUTER_LIST_KEY, target) || []

    setMeta(ROUTER_LIST_KEY, target, [...routers, { fnName: property, method: type, path: path }])
  }
}

export function get (path: string) {
  return method('GET', path)
}

export function put (path: string) {
  return method('PUT', path)
}

export function del (path: string) {
  return method('DELETE', path)
}

export function post (path: string) {
  return method('POST', path)
}

export function any (path: string) {
  return method('ANY', path)
}
