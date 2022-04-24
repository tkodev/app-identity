import React from 'react'
import { Box, Container } from '@mui/material'
import { CmsSection } from '@/types'
import { makeSx } from '@/queries'

type SectionProps = {
  section?: CmsSection
}

const useSx = makeSx<SectionProps>(() => {
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
