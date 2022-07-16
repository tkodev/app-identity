import React from 'react'
import { Entry } from 'contentful'
import { Box } from '@mui/material'
import { Section } from '~/components/molecules'
import { createSx } from '~/conductors/hooks'
import { CmsSection, CmsSectionGroup } from '~/conductors/types'

type RenderSectionsProps = {
  sectionGroup?: Entry<CmsSectionGroup> | null
  isLoading?: boolean
}

const makeSx = createSx<RenderSectionsProps>(() => {
  return {
    root: {
      //
    }
  }
})

const RenderSections: React.VFC<RenderSectionsProps> = (props) => {
  const { sectionGroup, isLoading } = props
  const { sections } = sectionGroup?.fields ?? {}
  const sx = makeSx(props)

  return (
    <Box sx={sx.root}>
      {sections?.map((section, sectionIndex) => {
        const contentType = section.sys.contentType.sys.id
        if (contentType === 'section') {
          return <Section section={section as Entry<CmsSection>} sectionIndex={sectionIndex} key={section.sys.id} />
        }
      })}
      {isLoading && 'isLoading'}
    </Box>
  )
}

export { RenderSections }
