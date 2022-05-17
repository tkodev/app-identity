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

const Sections: React.VFC<SectionsProps> = (props) => {
  const { sectionGroup } = props
  const { fields } = sectionGroup ?? {}
  const { sections } = fields ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      {sections?.items.map((item) => {
        const contentType = item.sys.contentType.sys.id
        if (contentType === 'section') {
          return <Section section={item as Entry<CmsSection>} key={item.sys.id} />
        }
        if (contentType === 'sectionGroup') {
          // todo: use section carousel instead of section group
          return <Sections sectionGroup={item as Entry<CmsSectionGroup>} key={item.sys.id} />
        }
      })}
    </Box>
  )
}

export { Sections }
