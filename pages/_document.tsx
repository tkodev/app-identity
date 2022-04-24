/* eslint-disable @next/next/no-css-tags */
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { createEmotionCache, createEmotionTags } from '@/utils'
import { theme } from '@/utils/theme'

type NextDocumentProps = {
  emotionTags?: JSX.Element[]
}

const NextDocument = (props: NextDocumentProps = {}) => {
  const { emotionTags } = props

  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,400&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="/fonts/carbon/index.css" />
        {emotionTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

NextDocument.getInitialProps = async (ctx: DocumentContext) => {
  const props = await Document.getInitialProps(ctx)
  const { renderPage } = ctx

  // emotion data
  const emotionCache = createEmotionCache()
  const emotionTags = createEmotionTags(emotionCache, props.html)

  // update page render
  ctx.renderPage = () =>
    renderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={emotionCache} {...props} />
        }
    })

  // return props to document
  return {
    ...props,
    emotionTags
  }
}

export default NextDocument
