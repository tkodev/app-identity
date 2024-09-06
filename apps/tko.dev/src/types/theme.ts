import { Config } from 'tailwindcss'

type Theme = NonNullable<Config['theme']>

type NestedTheme<T = string> = Record<string, Record<string, T>>

interface NestedDictionary {
  [key: string]: string | NestedDictionary
}
interface FlattenedDictionary {
  [key: string]: string
}

type ThemeMode = 'light' | 'dark'

export type { NestedTheme, Theme, NestedDictionary, FlattenedDictionary, ThemeMode }
