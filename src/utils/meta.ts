import 'reflect-metadata'

export function getMeta (key: string, target: object) {
  return Reflect.getMetadata(key, target)
}

export function setMeta (key: string, target: object, value: any) {
  return Reflect.defineMetadata(key, value, target)
}
