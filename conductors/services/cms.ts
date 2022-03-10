import { cmsClient } from '@/shared/configs'
import { CmsEntryParams, CmsEntriesParams } from '@/shared/types'
import { CONTENTFUL_MAX_DEPTH, CONTENTFUL_ENTRIES_LIMIT } from '@/shared/constants'

// types
type getCmsEntryProps = {
  params: Partial<CmsEntryParams>
  entryId: string
}

type getCmsEntriesProps = {
  params: Partial<CmsEntriesParams>
}

// services
const getEntry = async <T = any>(props: getCmsEntryProps) => {
  const { params, entryId } = props

  const allParams = {
    include: CONTENTFUL_MAX_DEPTH,
    ...params
  }

  const response = await cmsClient.getEntry<T>(entryId, allParams)

  // return
  return response
}

const getEntries = async <T = any>(props: getCmsEntriesProps) => {
  const { params } = props

  const allParams = {
    include: CONTENTFUL_MAX_DEPTH,
    limit: CONTENTFUL_ENTRIES_LIMIT,
    ...params
  }

  const response = await cmsClient.getEntries<T>(allParams)

  // return
  return response
}

// export
export { getEntries, getEntry }
