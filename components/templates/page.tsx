import React from 'react'
import Head from 'next/head'
import { Header, Main, Footer } from '@/components/organisms'
import { Box } from '@mui/material'
import { Sx } from '@/shared/types'

type PageProps = {
  title?: string
  desc?: string
}

const useSx = (props: PageProps): Sx => ({
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
