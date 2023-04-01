import localFont from 'next/font/local'

const industryFont = localFont({
  src: [
    {
      path: './industry-light-italic.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './industry-light.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: './industry-book-italic.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './industry-book.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './industry-demi-italic.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './industry-demi.woff2',
      weight: '700',
      style: 'italic'
    }
  ]
})

export { industryFont }
