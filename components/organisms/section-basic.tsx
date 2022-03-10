import React from 'react'
import { Box, Container } from '@mui/material'
import { Sx, CmsSectionBasic } from '@/shared/types'

type SectionBasicProps = {
  section?: CmsSectionBasic
}

const useSx = (props: SectionBasicProps): Sx => ({
  root: {},
  container: {
    height: '100%',
    paddingTop: 2,
    paddingBottom: 2
  }
})

const SectionBasic: React.FC<SectionBasicProps> = (props) => {
  const { section, children } = props
  const { title, desc, type } = section ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      <Container fixed sx={sx.container}>
        {children}
      </Container>
    </Box>
  )
}

export { SectionBasic }
