
import type { Config } from 'tailwindcss'
import { themeConfig } from './src/themes/theme'
import sharedConfig from '@repo/tailwind-config/tailwind.config'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [sharedConfig, themeConfig],
}

export default config
