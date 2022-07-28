import { Asset } from 'contentful'
import { Entry } from 'contentful'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'

// base template
type CmsBase<CmsProps = {}> = {
  alias: string
  title: string
  desc: string
} & CmsProps

// core types
type CmsSite = CmsBase<{
  image: Asset
  logoNav: Entry<CmsNav>
  headerNavs: Entry<CmsNav>[]
  footerNavs: Entry<CmsNav>[]
  socialNavs: Entry<CmsNav>[]
}>

// page types
type CmsPage = CmsBase<{
  image: Asset
  sections: CmsSections
}>
type CmsProject = CmsBase<{
  image: Asset
  sections: CmsSections
}>

// section types
type CmsSections = Array<Entry<CmsSection> | Entry<CmsSectionCarousel> | Entry<CmsSectionExperience>>
type CmsSection = CmsBase<{
  variant: 'hero' | 'split'
  bgImage: Asset
  bgColor: string
  image: Asset
  navs?: Entry<CmsNav>[]
}>
type CmsSectionCarousel = CmsBase<{
  sections: CmsSections
}>
type CmsSectionExperience = CmsBase<{
  bgImage: Asset
  bgColor: string
  image: Asset
  experiences: Entry<CmsExperience>[]
}>

// misc types
type CmsNav = CmsBase<{
  iconType?: IconPrefix
  icon?: IconName
  url?: string
  file?: Asset
}>
type CmsExperience = CmsBase<{
  company: string
  startDate: string
  endDate: string
  url?: string
}>

export type {
  CmsBase,
  CmsSite,
  CmsPage,
  CmsProject,
  CmsSections,
  CmsSection,
  CmsSectionCarousel,
  CmsSectionExperience,
  CmsNav,
  CmsExperience
}
