type CmsBasicParams = {
  locale?: string
  content_type?: string
  include?: number
  limit?: number
}
type CmsEntryParams = Omit<CmsBasicParams, 'limit'>
type CmsEntriesParams = CmsBasicParams

type CmsEntry = {
  uid: string
  title: string
  desc: string
}

type CmsSectionBasic = {
  type: string
} & CmsEntry

type CmsSectionHome = {
  showHeaderPadding?: number
} & CmsSectionBasic

type CmsPage = {
  uid: string
  title: string
  desc: string
  sections: CmsSectionBasic[]
} & CmsEntry

export type { CmsEntryParams, CmsEntriesParams, CmsPage, CmsSectionBasic, CmsSectionHome }
