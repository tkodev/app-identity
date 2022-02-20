import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/organisms/header'
import { Footer } from '@/components/organisms/footer'
import { Main } from '@/components/organisms/main'
import { Box } from '@mui/material'

type LayoutProps = {
  title?: string
  desc?: string
}

const useSx = (props: LayoutProps) => ({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: 'min-content 1fr min-content'
  }
})

const Layout: React.FC<LayoutProps> = (props) => {
  const { title, desc, children } = props
  const styles = useSx(props)

  return (
    <Box sx={styles.root}>
      <Head>
        {title && <title>{title}</title>}
        {desc && <meta name="description" content={desc} />}
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
      layout
    </Box>
  )
}

export { Layout }
