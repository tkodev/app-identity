import { Asset, Entry } from 'contentful'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'

// base template
type CmsTemplate<CmsProps = {}> = {
  alias: string
  title: string
  desc: string
} & CmsProps
type CmsContentType<CmsType = string> = { sys: { contentType: { sys: { id: CmsType } } } }
type CmsBase<CmsType = string, CmsProps = {}> = Entry<CmsTemplate<CmsProps>> & CmsContentType<CmsType>

// core types
type CmsSite = CmsBase<
  'site',
  {
    image: Asset
    logoNav: CmsNav
    headerNavs: CmsNav[]
    footerNavs: CmsNav[]
    socialNavs: CmsNav[]
  }
>

// page types
type CmsPage = CmsBase<
  'page',
  {
    image: Asset
    sections: CmsSections
  }
>
type CmsProject = CmsBase<
  'project',
  {
    image: Asset
    sections: CmsSections
  }
>

// section types
type CmsSections = Array<CmsSection | CmsSectionCarousel | CmsSectionExperience>
type CmsSection = CmsBase<
  'section',
  {
    variant: 'hero' | 'split'
    bgImage: Asset
    bgColor: string
    image: Asset
    navs?: CmsNav[]
  }
>
type CmsSectionCarousel = CmsBase<
  'sectionCarousel',
  {
    sections: CmsSections
  }
>
type CmsSectionExperience = CmsBase<
  'sectionExperience',
  {
    bgImage: Asset
    bgColor: string
    image: Asset
    experiences: CmsExperience[]
  }
>

// misc types
type CmsNav = CmsBase<
  'nav',
  {
    iconType?: IconPrefix
    icon?: IconName
    url?: string
    file?: Asset
  }
>
type CmsExperience = CmsBase<
  'experience',
  {
    company: string
    startDate: string
    endDate: string
    url?: string
  }
>

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
