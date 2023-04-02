import { DocumentProps, Head, Html, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@mantine/next'

const Document = (props: DocumentProps) => {
  const { styles } = props

  return (
    <Html lang="en">
      <Head>{styles}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

const getInitialProps = createGetInitialProps()

export { getInitialProps }
export default Document
