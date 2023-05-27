import localFont from 'next/font/local'

const allianceNo2Font = localFont({
  variable: '--font-alliance-no2',
  src: [
    {
      path: '../../../public/fonts/alliance-no2/alliance-no2-bold-italic.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/alliance-no2/alliance-no2-bold.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/alliance-no2/alliance-no2-regular-italic.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/alliance-no2/alliance-no2-regular.woff2',
      weight: '700',
      style: 'italic'
    }
  ]
})

const allianceNo2FontName = '--font-alliance-no2'
const allianceNo2FontVariable = `${allianceNo2FontName}: ${allianceNo2Font.style.fontFamily};`

export { allianceNo2Font, allianceNo2FontVariable }
