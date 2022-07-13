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
    mode: 'dark',
    primary: {
      main: '#F8A51B'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Carbon", monospace',
    fontWeightLight: 'thin',
    fontWeightRegular: 'normal',
    fontWeightMedium: 'bold',
    fontWeightBold: 'bold',
    body1: {
      fontSize: 16
    },
    body2: {
      fontSize: 16
    },
    button: {
      fontSize: 14,
      letterSpacing: 2,
      fontWeight: 'normal'
    }
  },
  options: {
    barHeight: '100px'
  }
})

export { theme }
