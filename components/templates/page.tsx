import React from 'react'
import Head from 'next/head'
import { Header, Main, Footer, Section } from '@/components/organisms'
import { Sections } from '@/components/templates'
import { Box } from '@mui/material'
import { CmsPage } from '@/types'
import { makeSx } from '@/queries'

type PageProps = {
  page?: CmsPage | null
}

const useSx = makeSx<PageProps>(() => {
  return {
    root: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateRows: 'min-content 1fr min-content'
    }
  }
})

const Page: React.FC<PageProps> = (props) => {
  const { page, children } = props
  const { title, desc, sections } = page ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      <Head>
        {title && <title>{title}</title>}
        {desc && <meta name="description" content={desc} />}
      </Head>
      <Header />
      <Main>
        <Sections sections={sections} />
        <Section>{children}</Section>
      </Main>
      <Footer />
    </Box>
  )
}

export { Page }
