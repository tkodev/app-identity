import Head from 'next/head'
import React from 'react'
import { Entry } from 'contentful'
import { Box } from '@mui/material'
import { Footer, Header, Main } from '~/components/organisms'
import { Sections } from '~/components/templates'
import { createSx } from '~/conductors/hooks'
import { CmsPage, CmsSite } from '~/conductors/types'

type PageProps = {
  page?: Entry<CmsPage> | null
  site?: Entry<CmsSite> | null
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
  const { page, site, children } = props
  const { title: pageTitle, desc: pageDesc, sectionGroup } = page?.fields ?? {}
  const { title: siteTitle, desc: siteDesc } = site?.fields ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      <Head>
        <title>{pageTitle || pageDesc}</title>
        <meta name="description" content={pageDesc || siteDesc} />
      </Head>
      <Header site={site} />
      <Main>
        <Sections sectionGroup={sectionGroup}>{children}</Sections>
      </Main>
      <Footer site={site} />
    </Box>
  )
}

export { Page }
