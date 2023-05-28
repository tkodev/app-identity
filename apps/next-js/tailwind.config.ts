import { Config } from 'tailwindcss'
import { theme } from './src/styles/themes/theme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme,
  plugins: []
}

export default config
