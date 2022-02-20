import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { theme, createEmotionCache } from '@/shared/configs/theme'

type MyAppProps = {
  emotionCache?: EmotionCache
} & AppProps

const clientSideCache = createEmotionCache()

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
