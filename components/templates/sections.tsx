import React from 'react'
import { Box } from '@mui/material'
import { Entry } from 'contentful'
import { CmsSection, CmsSectionGroup } from '@/conductors/types'
import { Section } from '@/components/organisms'
import { createSx } from '@/conductors/hooks'

type SectionsProps = {
  sectionGroup?: Entry<CmsSectionGroup> | null
}

const useSx = createSx<SectionsProps>(() => {
  return {
    root: {
      //
    }
  }
})

const Sections: React.FC<SectionsProps> = (props) => {
  const { sectionGroup, children } = props
  const { sections } = sectionGroup?.fields ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      {sections?.map((section, sectionIndex) => {
        const contentType = section.sys.contentType.sys.id
        if (contentType === 'section') {
          return <Section section={section as Entry<CmsSection>} sectionIndex={sectionIndex} key={section.sys.id} />
        }
        if (contentType === 'sectionGroup') {
          // todo: use section carousel instead of section group
          return <Sections sectionGroup={section as Entry<CmsSectionGroup>} key={section.sys.id} />
        }
      })}
      {children && <Section>{children}</Section>}
    </Box>
  )
}

export { Sections }
