import { NextPage } from 'next'
import { Layout } from '~/components/templates/layout'
import { NextSeo } from '~/types/seo'

type HomePageProps = {}

const HomePage: NextPage<HomePageProps> = (props) => {
  const {} = props

  const seo: NextSeo = {
    siteName: 'tkodev',
    pageName: 'homepage',
    pageDesc: 'homepage for tkodev',
    pageImage: '/thumbnail.png'
  }

  return (
    <Layout seo={seo}>
      <p>test</p>
    </Layout>
  )
}

export default HomePage
