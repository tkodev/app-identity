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
  isLoading?: boolean
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

const Page: React.VFC<PageProps> = (props) => {
  const { page, site, isLoading } = props
  const { title: pageTitle, desc: pageDesc, sectionGroup } = page?.fields ?? {}
  const { title: siteTitle, desc: siteDesc } = site?.fields ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      {isLoading && (
        <Head>
          <title>
            {pageTitle} | {siteTitle}
          </title>
          <meta name="description" content={pageDesc || siteDesc} />
        </Head>
      )}
      <Header site={site} />
      <Main>
        <Sections sectionGroup={sectionGroup} isLoading={isLoading} />
      </Main>
      <Footer site={site} />
    </Box>
  )
}

export { Page }
