import React from 'react'
import { Entry } from 'contentful'
import { Box, Container } from '@mui/material'
import { createSx } from '~/conductors/hooks'
import { CmsSection } from '~/conductors/types'

type SectionProps = {
  section?: Entry<CmsSection>
  sectionIndex?: number
}

const useSx = createSx<SectionProps>((props, theme) => {
  const { sectionIndex } = props
  const { barHeight } = theme.options
  return {
    root: {},
    container: {
      height: '100%',
      paddingTop: sectionIndex === 0 ? barHeight : 2,
      paddingBottom: 2
    }
  }
})

const Section: React.FC<SectionProps> = (props) => {
  const { section, children } = props
  const { title, desc, type, image, attributes } = section?.fields ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      <Container fixed sx={sx.container}>
        {children || <p>{title}</p>}
      </Container>
    </Box>
  )
}

export { Section }
