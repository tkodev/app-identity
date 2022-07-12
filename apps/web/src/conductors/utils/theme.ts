import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    options: {
      barHeight: string
    }
  }
  interface ThemeOptions {
    options: {
      barHeight: string
    }
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontSize: 12,
    fontFamily: '"Carbon", monospace',
    fontWeightLight: 'thin',
    fontWeightRegular: 'normal',
    fontWeightMedium: 'bold',
    fontWeightBold: 'bold',
    button: {
      fontSize: 12,
      letterSpacing: 2.5,
      fontWeight: 'normal'
    }
  },
  options: {
    barHeight: '70px'
  }
})

export { theme }
