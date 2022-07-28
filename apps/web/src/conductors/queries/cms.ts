import { QueryClient, useQuery } from 'react-query'
import { EntryCollection } from 'contentful'
import { CmsBase } from '~/conductors/types'
import { axiosClient, createCacheKey } from '~/conductors/utils'

const QUERY_KEY_CMS_ENTRIES = 'cmsEntries'

type CmsEntriesRequest = {
  locale?: string
  include?: number
  limit?: number
  contentType?: string
  fieldsAlias?: string
}
type CmsEntriesResponse<T = any> = EntryCollection<T>

const getCmsEntries = async <T = CmsBase>(params: CmsEntriesRequest) => {
  return axiosClient
    .get<CmsEntriesResponse<T>>(`/api/get-cms-entries`, {
      params
    })
    .then(({ data }) => data)
}

const useCmsEntries = <T = CmsBase>(params: CmsEntriesRequest) => {
  const cacheKey = createCacheKey(params)

  return useQuery([QUERY_KEY_CMS_ENTRIES, cacheKey], () => {
    return getCmsEntries<T>(params)
  })
}

const ssrCmsEntries = <T = CmsBase>(params: CmsEntriesRequest, queryClient: QueryClient) => {
  const cacheKey = createCacheKey(params)

  return queryClient.prefetchQuery([QUERY_KEY_CMS_ENTRIES, cacheKey], () => {
    return getCmsEntries<T>(params)
  })
}

export { QUERY_KEY_CMS_ENTRIES, getCmsEntries, useCmsEntries, ssrCmsEntries }
export type { CmsEntriesRequest, CmsEntriesResponse }
