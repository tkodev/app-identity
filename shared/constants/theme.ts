import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontSize: 12,
    fontFamily: '"Roboto Mono", monospace',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    button: {
      fontSize: 10,
      letterSpacing: 2.5
    }
  }
})

export { theme }
