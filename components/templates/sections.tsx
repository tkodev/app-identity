import React from 'react'
import { Box } from '@mui/material'
import { Sx, CmsSectionBasic } from '@/shared/types'
import { SectionHome } from '@/components/organisms'
import { Entry } from 'contentful'

type SectionsProps = {
  sections?: Entry<CmsSectionBasic>[]
}

const useSx = (props: SectionsProps): Sx => ({
  root: {
    //
  }
})

const Sections: React.VFC<SectionsProps> = (props) => {
  const { sections } = props
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      {sections?.map(({ sys, fields: section }) => {
        const contentType = sys.contentType.sys.id
        if (contentType === 'sectionBasic') {
          return <SectionHome section={section} key={section.uid} />
        }
        if (contentType === 'sectionHome') {
          return <SectionHome section={section} key={section.uid} />
        }
      })}
    </Box>
  )
}

export { Sections }
