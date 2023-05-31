import Head from 'next/head'
import { Window } from '~/components/atoms/window'
import { Seo } from '~/components/univerals/seo'
import { Main } from '~/components/atoms/main'
import { Header } from '~/components/organisms/header'
import { Footer } from '~/components/organisms/footer'
import { Favicon } from '~/components/univerals/favicon'

import { NextSeo } from '~/types/seo'
import { allianceNo1Font } from '~/assets/fonts/alliance-no1'
import { allianceNo2Font } from '~/assets/fonts/alliance-no2'
import { favicon } from '~/assets/favicons/favicon'
import { Viewport } from '../univerals/viewport'

type LayoutProps = {
  seo: NextSeo
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { seo, children } = props

  return (
    <Window fontVariables={[allianceNo1Font.variable, allianceNo2Font.variable]}>
      <Head>
        <Viewport scale={1} width="device-width" />
        <Seo seo={seo} />
        <Favicon favicon={favicon} />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Window>
  )
}

export { Layout }
