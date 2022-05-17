import { useQuery } from 'react-query'
import { axiosClient, createCacheKey } from '@/conductors/utils'
import { EntryCollection } from 'contentful'
import { CmsEntry } from '@/conductors/types'

const QUERY_KEY_CMS_ENTRIES = 'cmsEntries'

type CmsEntriesRequest = {
  locale?: string
  include?: number
  limit?: number
  contentType?: string
  'fields.uid'?: string
}
type CmsEntriesResponse<T = any> = EntryCollection<T>

const getCmsEntries = async <T = CmsEntry>(params: CmsEntriesRequest) => {
  return axiosClient
    .get<CmsEntriesResponse<T>>(`/api/get-cms-entries`, {
      params
    })
    .then(({ data }) => data)
}

function useCmsEntries(params: CmsEntriesRequest) {
  const cacheKey = createCacheKey(params)

  return useQuery([QUERY_KEY_CMS_ENTRIES, cacheKey], () => {
    return getCmsEntries(params)
  })
}

export { QUERY_KEY_CMS_ENTRIES, getCmsEntries, useCmsEntries }
export type { CmsEntriesRequest, CmsEntriesResponse }
