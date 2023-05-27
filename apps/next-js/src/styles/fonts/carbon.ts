import localFont from 'next/font/local'

const carbonFont = localFont({
  variable: '--font-carbon',
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

const carbonFontName = '--font-carbon'
const carbonFontVariable = `${carbonFontName}: ${carbonFont.style.fontFamily};`

export { carbonFont, carbonFontVariable }
