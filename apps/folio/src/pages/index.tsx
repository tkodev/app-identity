import { NextPage } from 'next'
import { Page } from '~/components/species'
import { ssrCmsEntries, useCmsEntries } from '~/conductors/queries'
import { CmsPage, CmsSite } from '~/conductors/types'
import { ssrQueryClient } from '~/conductors/utils/query'
import { formatName } from '@tkodev/utils/src/format'

const siteParams = {
  contentType: 'site',
  fieldsAlias: 'site-tkodev'
}
const pageParams = {
  contentType: 'page',
  fieldsAlias: 'page-home'
}

const HomePage: NextPage = () => {
  // fetches
  const { data: sites, isLoading: isSiteLoading } = useCmsEntries<CmsSite>(siteParams)
  const { data: pages, isLoading: isPageLoading } = useCmsEntries<CmsPage>(pageParams)

  // render vars
  const site = sites?.items[0]
  const page = pages?.items[0]
  const isLoading = isSiteLoading || isPageLoading

  return <Page site={site} page={page} isLoading={isLoading} />
}

const getStaticProps = async () => {
  const dehydratedState = await ssrQueryClient(async (queryClient) => {
    await ssrCmsEntries<CmsSite>(siteParams, queryClient)
    await ssrCmsEntries<CmsPage>(pageParams, queryClient)
  })

  return {
    props: {
      dehydratedState
    }
  }
}

export { getStaticProps }
export default HomePage
