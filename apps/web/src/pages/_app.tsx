import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { createEmotionCache } from '~/conductors/utils'
import { theme } from '~/conductors/utils/theme'

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
