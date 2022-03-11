import { Entry } from 'contentful'

type CmsEntriesParams = {
  include: number
  limit: number
  locale?: string
  content_type?: string
}

type CmsEntry = {
  uid: string
  title: string
  desc: string
}

type CmsSectionBasic = {
  //
} & CmsEntry

type CmsSectionHome = {
  isBehindHeader?: number
} & CmsEntry

type CmsPage = {
  sections: Entry<CmsSectionBasic>[]
} & CmsEntry

export type { CmsEntriesParams, CmsPage, CmsSectionBasic, CmsSectionHome }
