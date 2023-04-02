import localFont from 'next/font/local'

const carbonFont = localFont({
  src: [
    {
      path: '../../../public/fonts/carbon-regular-italic.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/carbon-regular.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/carbon-bold-italic.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/carbon-bold.woff2',
      weight: '700',
      style: 'italic'
    }
  ]
})

export { carbonFont }
