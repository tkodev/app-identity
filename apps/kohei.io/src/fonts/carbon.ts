import localFont from 'next/font/local'

const carbonFont = localFont({
  src: [
    {
      path: '../../public/fonts/carbon/carbon-regular-italic.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/carbon/carbon-regular.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/carbon/carbon-bold-italic.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/carbon/carbon-bold.woff2',
      weight: '700',
      style: 'italic'
    }
  ]
})

export { carbonFont }
