import { NextSeo } from '~/types/seo'

type SeoProps = {
  seo: NextSeo
}

const Seo: React.FC<SeoProps> = (props) => {
  const { seo } = props
  const { siteName, pageName, pageDesc, pageImage } = seo

  const fullName = `${siteName} | ${pageName}`

  return (
    <>
      <title>{fullName}</title>
      <meta name="description" content={pageDesc} />
      <meta property="og:title" content={fullName} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={pageImage} />
    </>
  )
}

export { Seo }
