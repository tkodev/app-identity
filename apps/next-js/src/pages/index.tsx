import { NextPage } from 'next'
import { Layout } from '~/components/templates/layout'

type HomePageProps = {}

const HomePage: NextPage<HomePageProps> = (props) => {
  const {} = props

  const seo = {
    siteName: 'tkodev',
    pageName: 'homepage',
    pageDesc: 'homepage for tkodev',
    pageImage: '/thumbnail.png'
  }

  return (
    <Layout seo={seo}>
      <h1>HomePage</h1>
    </Layout>
  )
}

export default HomePage
