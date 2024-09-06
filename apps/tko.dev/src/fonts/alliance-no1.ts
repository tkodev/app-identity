import localFont from 'next/font/local'

const allianceNo1Font = localFont({
  src: [
    {
      path: '../../public/fonts/alliance-no1/alliance-no1-bold-italic.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/alliance-no1/alliance-no1-bold.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/alliance-no1/alliance-no1-regular-italic.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/alliance-no1/alliance-no1-regular.woff2',
      weight: '700',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-alliance-no1'
})

export { allianceNo1Font }
