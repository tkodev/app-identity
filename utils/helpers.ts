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

export { ratioToPercentStr }
