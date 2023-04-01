import { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'

const font = Montserrat({
  subsets: ['latin']
})

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark'
        }}
      >
        <div className={font.className}>
          <Component {...pageProps} />
        </div>
      </MantineProvider>
    </>
  )
}

export default App
