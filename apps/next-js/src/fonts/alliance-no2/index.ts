import localFont from 'next/font/local'

const allianceNo2Font = localFont({
  src: [
    {
      path: './alliance-no2-bold-italic.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './alliance-no2-bold.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './alliance-no2-regular-italic.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './alliance-no2-regular.woff2',
      weight: '700',
      style: 'italic'
    }
  ]
})

export { allianceNo2Font }
