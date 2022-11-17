import Head from 'next/head'
import React from 'react'
import { Entry } from 'contentful'
import { Box } from '@mui/material'
import { Footer, Header, Main, RenderSections } from '~/components/organisms'
import { createSx } from '~/conductors/hooks'
import { CmsPage, CmsSite } from '~/conductors/types'

type PageProps = {
  page?: Entry<CmsPage> | null
  site?: Entry<CmsSite> | null
  isLoading?: boolean
}

const makeSx = createSx<PageProps>(() => {
  return {
    root: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplate: `
        "header" min-content
        "main" 1fr
        "footer" min-content
      `
    }
  }
})

const Page: React.VFC<PageProps> = (props) => {
  const { page, site, isLoading } = props
  const { title: pageTitle, desc: pageDesc, sections } = page?.fields ?? {}
  const { title: siteTitle, desc: siteDesc } = site?.fields ?? {}
  const sx = makeSx(props)

  return (
    <Box sx={sx.root}>
      {!isLoading && (
        <Head>
          <title>
            {pageTitle} | {siteTitle}
          </title>
          <meta name="description" content={pageDesc || siteDesc} />
        </Head>
      )}
      <Header site={site} />
      <Main>
        <RenderSections sections={sections} isLoading={isLoading} />
      </Main>
      <Footer site={site} />
    </Box>
  )
}

export { Page }
