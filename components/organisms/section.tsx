import React from 'react'
import { Entry } from 'contentful'
import { Box, Container } from '@mui/material'
import { CmsSection } from '@/conductors/types'
import { createSx } from '@/conductors/hooks'

type SectionProps = {
  section?: Entry<CmsSection>
}

const useSx = createSx<SectionProps>(() => {
  return {
    root: {},
    container: {
      height: '100%',
      paddingTop: 2,
      paddingBottom: 2
    }
  }
})

const Section: React.FC<SectionProps> = (props) => {
  const { section, children } = props
  const { fields } = section ?? {}
  const { title, desc, type, image, attributes } = fields ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      <Container fixed sx={sx.container}>
        {children}
      </Container>
    </Box>
  )
}

export { Section }
