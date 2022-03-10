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

export type { CmsPage, CmsSectionBasic, CmsSectionHome }
