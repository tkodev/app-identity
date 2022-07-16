import { Asset, Entry } from 'contentful'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'

// base
type CmsEntry<T = {}> = {
  alias: string
  title: string
  desc: string
} & T

// 01-02 - pages and sites
type CmsSite = CmsEntry<{
  image: Asset
  logoNav: Entry<CmsNav>
  headerNavs: Entry<CmsNav>[]
  footerNavs: Entry<CmsNav>[]
  socialNavs: Entry<CmsNav>[]
}>
type CmsPage = CmsEntry<{
  image: Asset
  sections: Entry<CmsSection>[]
}>

// 03-04 - navs
type CmsNav = CmsEntry<{
  iconType?: IconPrefix
  icon?: IconName
  path?: string
  file?: Asset
}>

// 05-06 - sections
type CmsSection = CmsEntry<{
  variant: 'hero' | 'split'
  bgImage: Asset
  bgColor: string
  image: Asset
  navs: Entry<CmsNav>[]
}>

export type { CmsEntry, CmsNav, CmsSection, CmsPage, CmsSite }
