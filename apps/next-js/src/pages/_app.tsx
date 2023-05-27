import Head from 'next/head'
import { AppProps } from 'next/app'
import { Viewport } from '~/components/universals/viewport'
import { Favicon } from '~/components/universals/favicon'
import { Fonts } from '~/components/universals/fonts'

import { favicon } from '~/styles/favicons/favicon'
import { allianceNo1FontVariable } from '~/styles/fonts/alliance-no1'
import { allianceNo2FontVariable } from '~/styles/fonts/alliance-no2'
import '~/styles/themes/globals.css'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <Viewport scale={1} width="device-width" />
        <Favicon favicon={favicon} />
        <Fonts fontVariables={[allianceNo1FontVariable, allianceNo2FontVariable]} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
