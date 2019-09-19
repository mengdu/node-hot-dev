'use strict'
import 'reflect-metadata'

export function setMetadata (key, route, target) {
  Reflect.defineMetadata(key, route, target)
}

export function getMetadata (key, target) {
  return Reflect.getMetadata(key, target)
}
