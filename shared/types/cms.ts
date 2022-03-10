type CmsEntryParams = {
  include: number
}
type CmsEntriesParams = {
  include: number
  limit: number
}

type CmsEntry = {
  uid: string
  title: string
  desc: string
}

type CmsSectionBasic = {
  type: string
} & CmsEntry

type CmsSectionHome = {
  //
} & CmsSectionBasic

type CmsPage = {
  uid: string
  title: string
  desc: string
  sections: CmsSectionBasic[]
} & CmsEntry

export type { CmsEntryParams, CmsEntriesParams, CmsPage, CmsSectionBasic, CmsSectionHome }
