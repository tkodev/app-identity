import localFont from 'next/font/local'

const industryFont = localFont({
  src: [
    {
      path: '../../../public/fonts/industry-book-italic.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/industry-book.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/industry-demi-italic.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/industry-demi.woff2',
      weight: '700',
      style: 'italic'
    }
  ]
})

export { industryFont }