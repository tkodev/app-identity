import { Asset, Entry } from 'contentful'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'

// templates
type CmsEntry<T = {}> = {
  alias: string
  title: string
  desc: string
} & T

// 01-02 - pages and sites
type CmsSite = CmsEntry<{
  logo: Asset
  icon: Asset
  image: Asset
  headerMenu: Entry<CmsNavMenu>
  footerMenu: Entry<CmsNavMenu>
  socialMenu: Entry<CmsNavMenu>
  copyright: string
}>
type CmsPage = CmsEntry<{
  image: Asset
  sectionGroup: Entry<CmsSectionGroup>
}>

// 03-04 - nav menus and navs
type CmsNavMenu = CmsEntry<{
  navs: Entry<CmsNav>[]
}>
type CmsNav = CmsEntry<{
  iconType?: IconPrefix
  icon?: IconName
  path?: string
  file?: Asset
}>

// 05-06 - section groups and sections
type CmsSectionGroup = CmsEntry<{
  sections: Entry<CmsSection | CmsSectionGroup>[]
}>
type CmsSection = CmsEntry<{
  variant: 'hero' | 'split'
  bgImage: Asset
  bgColor: string
  image: Asset
  navMenu: Entry<CmsNavMenu>
}>

export type { CmsEntry, CmsNav, CmsNavMenu, CmsSection, CmsSectionGroup, CmsPage, CmsSite }
