import Head from 'next/head'
import { Seo } from '~/components/universals/seo'
import { Main } from '~/components/organisms/main'
import { NextSeo } from '~/types/seo'
import { Header } from '~/components/organisms/header'
import { Footer } from '~/components/organisms/footer'
import { Window } from '~/components/atoms/window'

type LayoutProps = {
  seo: NextSeo
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { seo, children } = props

  return (
    <Window>
      <Head>
        <Seo seo={seo} />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Window>
  )
}

export { Layout }
