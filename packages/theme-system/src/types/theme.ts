import { Config } from 'tailwindcss'

type TailwindTheme = Config['theme']
type FontSizeConfig = NonNullable<TailwindTheme>['fontSize']
type Theme = TailwindTheme & {
  fontSizes?: Record<string, FontSizeConfig>
}

export type { TailwindTheme, Theme, FontSizeConfig }
