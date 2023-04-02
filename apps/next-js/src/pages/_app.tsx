import { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { Viewport } from '~/components/universals/viewport'
import { Favicon } from '~/components/universals/favicon'
import { Content } from '~/components/universals/content'
import { tkodevFavicon } from '~/styles/favicons/tkodev'
import { tkodevTheme } from '~/styles/themes/tkodev'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={tkodevTheme}>
      <Head>
        <Viewport scale={1} width="device-width" />
        <Favicon favicon={tkodevFavicon} />
      </Head>
      <Content>
        <Component {...pageProps} />
      </Content>
    </MantineProvider>
  )
}

export default App
