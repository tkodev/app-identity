import React from 'react'
import { Box, Container } from '@mui/material'
import { Sx, CmsSectionHome } from '@/shared/types'
import { headerHeight } from '@/shared/constants'

type SectionHomeProps = {
  section?: CmsSectionHome
}

const useSx = (props: SectionHomeProps): Sx => ({
  root: {
    paddingTop: props.section?.isBehindHeader ? headerHeight : 0,
    minHeight: '80vh',
    height: '1080px',
    maxHeight: '100vh'
  },
  container: {
    height: '100%',
    paddingTop: 2,
    paddingBottom: 2
  }
})

const SectionHome: React.VFC<SectionHomeProps> = (props) => {
  const { section } = props
  const { title, desc } = section ?? {}

  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      <Container fixed sx={sx.container}>
        test
      </Container>
    </Box>
  )
}

export { SectionHome }
