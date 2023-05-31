import { compactTheme } from '../utils/theme'

// theme docs: https://tailwindcss.com/docs/theme
// theme defaults: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js

const theme = compactTheme({
  fontFamily: {
    heading: [`var(--font-alliance-no2)`, 'sans-serif'],
    base: [`var(--font-alliance-no1)`, 'sans-serif'],
    mono: ['Menlo', 'Monaco', 'Courier New', 'monospace']
  },
  fontWeight: {
    regular: '400',
    bold: '700'
  },
  fontSizes: {
    core: {
      base: ['16px', { fontWeight: '400', lineHeight: '140%', letterSpacing: '0.00em' }],
      mono: ['16px', { fontWeight: '400', lineHeight: '140%', letterSpacing: '0.00em' }]
    },
    heading: {
      h1: ['34px', { fontWeight: '400', lineHeight: '120%', letterSpacing: '0.00em' }],
      h2: ['24px', { fontWeight: '400', lineHeight: '120%', letterSpacing: '0.00em' }],
      h3: ['20px', { fontWeight: '400', lineHeight: '120%', letterSpacing: '0.00em' }],
      title: ['96px', { fontWeight: '400', lineHeight: '120%', letterSpacing: '0.00em' }],
      subtitle: ['48px', { fontWeight: '400', lineHeight: '120%', letterSpacing: '0.00em' }],
      earmark: ['14px', { fontWeight: '400', lineHeight: '120%', letterSpacing: '0.25em' }],
      name: ['16px', { fontWeight: '700', lineHeight: '120%', letterSpacing: '0.25em' }]
    }
  },
  colors: {
    core: {
      base: {
        1: '#909296',
        2: '#373A40',
        3: '#25262B'
      },
      accent: {
        1: '#685340',
        2: '#4D3D30',
        3: '#332920'
      }
    },
    status: {
      success: {
        1: '#12B886',
        2: '#63E6BE',
        3: '#C3FAE8'
      },
      warning: {
        1: '#FAB005',
        2: '#FFE066',
        3: '#FFF3BF'
      },
      error: {
        1: '#FA5252',
        2: '#FFA8A8',
        3: '#FFE3E3'
      }
    },
    text: {
      light: {
        1: '#212529',
        2: '#495057',
        3: '#ADB5BD'
      },
      dark: {
        1: '#F8F9FA',
        2: '#C1C2C5',
        3: '#909296'
      }
    },
    paper: {
      light: {
        1: '#F8F9FA',
        2: '#E9ECEF',
        3: '#CED4DA'
      },
      dark: {
        1: '#101113',
        2: '#1A1B1E',
        3: '#2C2E33'
      }
    },
    utils: {
      transparent: 'transparent',
      current: 'currentColor'
    }
  },
  borderRadius: {
    xs: '1px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
    x2: '64px',
    x3: '96px',
    none: '0px',
    full: '9999px'
  },
  spacing: {
    xs: '1px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
    x2: '64px',
    x3: '96px'
  },
  screens: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    x2: '1536px',
    x3: '2160px'
  }
})

export { theme }
