import React from 'react'
import Head from 'next/head'
import { Entry } from 'contentful'
import { Header, Main, Footer, Section } from '@/components/organisms'
import { Sections } from '@/components/templates'
import { Box } from '@mui/material'
import { CmsPage } from '@/conductors/types'
import { createSx } from '@/conductors/hooks'

type PageProps = {
  page?: Entry<CmsPage> | null
}

const useSx = createSx<PageProps>(() => {
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
  const { fields } = page ?? {}
  const { title, desc, type, image, sectionGroup, attributes } = fields ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      <Head>
        {title && <title>{title}</title>}
        {desc && <meta name="description" content={desc} />}
      </Head>
      <Header />
      <Main>
        <Sections sectionGroup={sectionGroup} />
        <Section>{children}</Section>
      </Main>
      <Footer />
    </Box>
  )
}

export { Page }
