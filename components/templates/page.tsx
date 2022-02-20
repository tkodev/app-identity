import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/organisms/header'
import { Footer } from '@/components/organisms/footer'
import { Main } from '@/components/organisms/main'
import { Box } from '@mui/material'

type PageProps = {
  title?: string
  desc?: string
}

const useSx = (props: PageProps) => ({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: 'min-content 1fr min-content'
  }
})

const Page: React.FC<PageProps> = (props) => {
  const { title, desc, children } = props
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      <Head>
        {title && <title>{title}</title>}
        {desc && <meta name="description" content={desc} />}
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
      Page
    </Box>
  )
}

export { Page }
