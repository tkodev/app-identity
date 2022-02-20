import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import { ServerStyleSheets } from '@mui/styles'
import { theme, createEmotionCache } from '@/shared/configs/theme'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const { renderPage } = ctx

  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  const sheets = new ServerStyleSheets()

  ctx.renderPage = () =>
    renderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return sheets.collect(<App emotionCache={cache} {...props} />)
        }
    })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))
  const styles = [sheets.getStyleElement()]

  return {
    ...initialProps,
    emotionStyleTags,
    styles
  }
}

export default MyDocument
