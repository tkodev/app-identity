import { Entry, EntryCollection, Asset } from 'contentful'

// templates
type CmsEntry<T = {}> = {
  alias: string
  title: string
  desc: string
} & T

// navs
type CmsNav = CmsEntry<{
  icon: string
  path: string
  file: Asset
}>
type CmsNavMenu = CmsEntry<{
  navs: EntryCollection<CmsNav>
}>

// sections
type CmsSection = CmsEntry<{
  type: 'basic' | 'about' | 'featured' | 'projects' | 'contact'
  bgImage: Asset
  bgColor: string
  image: Asset
  attributes: Record<string, string>
}>
type CmsSectionGroup = CmsEntry<{
  sections: Entry<CmsSection | CmsSectionGroup>[]
}>

// pages and sites
type CmsPage = CmsEntry<{
  type: 'page' | 'project'
  image: Asset
  sectionGroup: Entry<CmsSectionGroup>
  attributes: Record<string, string>
}>
type CmsSite = CmsEntry<{
  logo: Asset
  icon: Asset
  image: Asset
  headerMenu: Entry<CmsNavMenu>
  footerMenu: Entry<CmsNavMenu>
  socialMenu: Entry<CmsNavMenu>
  copyright: string
  attributes: Record<string, string>
}>

export type { CmsEntry, CmsNav, CmsNavMenu, CmsSection, CmsSectionGroup, CmsPage, CmsSite }
