import { Config } from 'tailwindcss'
import { theme } from '@tkodev/theme-system/src/themes/tkodev'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme,
  plugins: []
}

export default config
