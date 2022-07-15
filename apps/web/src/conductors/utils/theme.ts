import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    options: {
      barHeight: string
      bgTint: string
    }
  }
  interface ThemeOptions {
    options: {
      barHeight: string
      bgTint: string
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
    fontSize: 12,
    fontFamily: '"Noto Sans", sans-serif',
    fontWeightLight: 'thin',
    fontWeightRegular: 'normal',
    fontWeightMedium: 'bold',
    fontWeightBold: 'bold',
    h1: {
      fontFamily: '"Carbon", monospace',
      lineHeight: 1.0
    },
    h2: {
      fontFamily: '"Carbon", monospace',
      lineHeight: 1.0
    },
    h3: {
      fontFamily: '"Carbon", monospace',
      lineHeight: 1.0
    },
    h4: {
      fontFamily: '"Carbon", monospace',
      lineHeight: 1.0
    },
    h5: {
      fontFamily: '"Carbon", monospace',
      lineHeight: 1.0
    },
    h6: {
      fontFamily: '"Carbon", monospace',
      lineHeight: 1.0
    },
    subtitle1: {
      fontFamily: '"Carbon", monospace',
      fontSize: 12,
      letterSpacing: 2,
      fontWeight: 'normal',
      textTransform: 'uppercase',
      opacity: 0.5
    },
    body1: {
      fontSize: 12,
      marginBottom: 16
    },
    button: {
      fontFamily: '"Carbon", monospace',
      fontSize: 12,
      letterSpacing: 2,
      fontWeight: 'normal',
      textTransform: 'uppercase'
    }
  },
  options: {
    barHeight: '80px',
    bgTint: `linear-gradient(rgba(18, 18, 18, 0.25), rgba(18, 18, 18, 0.25))`
  }
})

export { theme }
