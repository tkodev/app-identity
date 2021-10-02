import { CONTENTFUL_MAX_DEPTH, CONTENTFUL_ENTRIES_LIMIT, contentfulClient } from '@/backend/configs/contentful'

// types
type GetEntriesProps = {
  acceptLanguage: string
  params: Record<string, any>
}

// services
const getEntries = ({ acceptLanguage, params }: GetEntriesProps) =>
  contentfulClient.getEntries({
    include: CONTENTFUL_MAX_DEPTH,
    limit: CONTENTFUL_ENTRIES_LIMIT,
    locale: acceptLanguage,
    ...params
  })

// export
export { getEntries }
