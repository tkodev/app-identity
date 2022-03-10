import React from 'react'
import { Box } from '@mui/material'
import { Sx, CmsSectionBasic } from '@/shared/types'
import { SectionHome } from '@/components/organisms'

type SectionsProps = {
  sections?: CmsSectionBasic[]
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
      {sections?.map((section) => {
        if (section.type === 'basic') {
          return <SectionHome section={section} />
        }
        if (section.type === 'home') {
          return <SectionHome section={section} />
        }
      })}
    </Box>
  )
}

export { Sections }
