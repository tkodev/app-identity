import { reduce, mapKeys } from 'lodash'
import { TailwindTheme, Theme, FontSizeConfig } from '../types/theme'

const compactTheme = (theme: Theme): TailwindTheme => {
  const { fontSizes = {}, ...rest } = theme

  const fontSize: FontSizeConfig = reduce(
    fontSizes,
    (result, group, groupKey) => {
      const fontConfig = mapKeys(group, (_, fontKey) => `${groupKey}-${fontKey}`)
      return { ...result, ...fontConfig }
    },
    {}
  )

  const newTheme: TailwindTheme = {
    ...rest,
    fontSize
  }
  return newTheme
}

export { compactTheme }
