import { Config } from 'tailwindcss'
import { theme } from './src/styles/themes/theme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: theme
  },
  plugins: []
}

export default config
