import { useState } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from '~/conductors/utils'
import { theme } from '~/conductors/utils/theme'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faGithub, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(faGithub, faLinkedinIn, faInstagram, faTwitter)

type NextAppProps = {
  emotionCache?: EmotionCache
} & AppProps

const clientSideCache = createEmotionCache()

const NextApp = (props: NextAppProps) => {
  const { Component, emotionCache = clientSideCache, pageProps } = props
  const [queryClient] = useState(() => new QueryClient())

  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default NextApp
