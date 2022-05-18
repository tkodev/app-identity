import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    options: {
      headerHeight: string
    }
  }
  interface ThemeOptions {
    options: {
      headerHeight: string
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
    headerHeight: '70px'
  }
})

export { theme }
