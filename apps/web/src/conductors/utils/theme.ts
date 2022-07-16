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
    fontFamily: '"Industry", sans-serif',
    fontWeightLight: 'thin',
    fontWeightRegular: 'normal',
    fontWeightMedium: 'bold',
    fontWeightBold: 'bold',
    h1: {
      letterSpacing: 2,
      lineHeight: 1
    },
    h2: {
      letterSpacing: 2,
      lineHeight: 1.1
    },
    h3: {
      letterSpacing: 2,
      lineHeight: 1.1
    },
    h4: {
      letterSpacing: 2,
      lineHeight: 1.1
    },
    h5: {
      letterSpacing: 2,
      lineHeight: 1.1
    },
    h6: {
      letterSpacing: 2,
      lineHeight: 1.1
    },
    subtitle1: {
      fontSize: 10,
      letterSpacing: 2,
      fontWeight: 'normal',
      textTransform: 'uppercase',
      opacity: 0.5
    },
    button: {
      fontSize: 10,
      letterSpacing: 2,
      fontWeight: 'normal',
      textTransform: 'uppercase'
    },
    body1: {
      fontSize: 14,
      letterSpacing: 0.25,
      marginBottom: 16
    }
  },
  options: {
    barHeight: '80px',
    bgTint: `linear-gradient(rgba(18, 18, 18, 0.25), rgba(18, 18, 18, 0.25))`
  }
})

export { theme }
