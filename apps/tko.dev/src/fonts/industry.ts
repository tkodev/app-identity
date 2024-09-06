import localFont from 'next/font/local'

const industryFont = localFont({
  src: [
    {
      path: '../../public/fonts/industry/industry-book-italic.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/industry/industry-book.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/industry/industry-demi-italic.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/industry/industry-demi.woff2',
      weight: '700',
      style: 'italic'
    }
  ]
})

export { industryFont }
