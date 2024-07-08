import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/tailwind-config/tailwind.config'
import appConfig from './src/themes/tailwind.config'

const config: Pick<Config, 'theme' | 'content' | 'presets'> = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [appConfig, sharedConfig]
}

export default config
