import dayjs from 'dayjs'
import { round as _round } from 'lodash'

const ratioToPercentStr = (aspectRatio: string) => {
  const ratio =
    aspectRatio
      .split(':')
      .map(Number)
      .reduce((prev, cur) => cur / prev) || 0
  const decimal = _round(ratio, 4)
  const percent = `${decimal * 100}%`
  return percent
}

const keyObjBy = <T = any>(obj: Record<string, T>, fn: (val: T, key: string) => string) => {
  return Object.keys(obj).reduce<Record<string, T>>((acc, key) => {
    const newKey = fn(obj[key], key)
    acc[newKey] = obj[key]
    return acc
  }, {})
}

const mapObjBy = <T = any>(obj: Record<string, any>, fn: (val: any, key: string) => T) => {
  return Object.keys(obj).reduce<Record<string, T>>((acc, key) => {
    const newVal = fn(obj[key], key)
    acc[key] = newVal
    return acc
  }, {})
}

const createCacheKey = (obj: Record<string, any>): string => {
  const cacheKeys = Object.keys(obj)
    .sort((a, b) => a.localeCompare(b))
    .map((key) => {
      const newKey = JSON.stringify(key)
      const newVal = typeof obj[key] === 'object' ? createCacheKey(obj[key]) : JSON.stringify(obj[key])
      const cacheKey = `${newKey}:${newVal}`
      return cacheKey
    })
  return `{${cacheKeys.join(',')}}`
}

const replaceCurrentYear = (str: string) => {
  const year = dayjs().year().toString()
  const result = str.replace('<year>', year)
  return result
}

export { ratioToPercentStr, keyObjBy, mapObjBy, createCacheKey, replaceCurrentYear }
