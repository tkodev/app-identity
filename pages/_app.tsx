import { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '@/frontend/configs/emotion';
import { theme } from '@/frontend/configs/theme';

// types
type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
}

// app
const MyApp: FC<MyAppProps> = (props) => {
  const cache = createEmotionCache();
  const { Component, emotionCache = cache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

// export
export default MyApp