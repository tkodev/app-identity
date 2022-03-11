import React from 'react'
import { Box, Container } from '@mui/material'
import { Sx, CmsSectionHome } from '@/shared/types'
import { headerHeight } from '@/shared/constants'

type SectionHomeProps = {
  section?: CmsSectionHome
}

const useSx = (props: SectionHomeProps): Sx => ({
  root: {
    minHeight: '80vh',
    height: '1080px',
    maxHeight: '100vh',
    display: 'grid',
    gridTemplateRows: 'min-content 1fr'
  },
  spacer: {
    height: props.section?.isBehindHeader ? headerHeight : 0
  },
  content: {
    gridRow: 2
  },
  container: {
    height: '100%',
    paddingTop: 2,
    paddingBottom: 2
  }
})

const SectionHome: React.VFC<SectionHomeProps> = (props) => {
  const { section } = props
  const { title, desc, isBehindHeader } = section ?? {}

  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      <Box sx={sx.spacer} />
      <Box sx={sx.content}>
        <Container fixed sx={sx.container}>
          test
        </Container>
      </Box>
    </Box>
  )
}

export { SectionHome }
