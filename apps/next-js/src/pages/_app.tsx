import Head from 'next/head'
import { AppProps } from 'next/app'
import { clsx } from 'clsx'

import { Window } from '~/components/atoms/window'
import { Favicon } from '~/components/universals/favicon'
import { favicon } from '~/styles/favicons/favicon'
import { allianceNo1Font } from '~/styles/fonts/alliance-no1'
import { allianceNo2Font } from '~/styles/fonts/alliance-no2'

import '~/styles/themes/globals.css'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <Window className={clsx(allianceNo1Font.variable, allianceNo2Font.variable)}>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <Favicon favicon={favicon} />
      </Head>
      <Component {...pageProps} />
    </Window>
  )
}

export default App
