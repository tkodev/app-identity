/* eslint-disable @next/next/no-css-tags */
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { createEmotionCache, createEmotionTags } from '@/conductors/utils'

type NextDocumentProps = {
  emotionTags?: JSX.Element[]
}

const NextDocument = (props: NextDocumentProps = {}) => {
  const { emotionTags } = props

  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#333333" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#333333" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#333333" />
        {/* fonts */}
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
