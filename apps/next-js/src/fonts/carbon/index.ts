import localFont from 'next/font/local'

const carbonFont = localFont({
  src: [
    {
      path: './carbon-thin-italic.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './carbon-thin.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: './carbon-regular-italic.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './carbon-regular.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './carbon-bold-italic.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './carbon-bold.woff2',
      weight: '700',
      style: 'italic'
    }
  ]
})

export { carbonFont }
