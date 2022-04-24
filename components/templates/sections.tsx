import React from 'react'
import { Box } from '@mui/material'
import { CmsSection } from '@/types'
import { Section } from '@/components/organisms'
import { Entry } from 'contentful'
import { makeSx } from '@/queries'

type SectionsProps = {
  sections?: Entry<CmsSection>[]
}

const useSx = makeSx<SectionsProps>(() => {
  return {
    root: {
      //
    }
  }
})

const Sections: React.VFC<SectionsProps> = (props) => {
  const { sections } = props
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      {sections?.map(({ sys, fields: section }) => {
        const contentType = sys.contentType.sys.id
        if (contentType === 'section') {
          return <Section section={section} key={sys.id} />
        }
      })}
    </Box>
  )
}

export { Sections }
