import { Entry, EntryCollection, Asset } from 'contentful'

// request
type CmsEntriesRequest = {
  include: number
  limit: number
  locale?: string
  content_type?: string
}

// templates
type CmsEntry = {
  title: string
  alias?: string
  desc?: string
}

// content types
type CmsLink = CmsEntry & {
  path: string
  file: Asset
}

type CmsLinkGroup = CmsEntry & {
  links: EntryCollection<CmsLink>
}

type CmsSection = CmsEntry & {
  bgImage?: Asset
  bgColor?: string
}

type CmsPage = CmsEntry & {
  type: 'landing' | 'project'
  image: Asset
  sections: Entry<CmsSection>[]
}

type CmsSite = CmsEntry & {
  logo: Asset
  icon: Asset
  image: Asset
  header: EntryCollection<CmsLinkGroup>
  footer: EntryCollection<CmsLinkGroup>
  copyright: string
}

export type { CmsEntriesRequest, CmsSection, CmsPage, CmsSite }
