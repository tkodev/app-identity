import React from 'react'
import { Box, Container } from '@mui/material'
import { Sx, CmsSectionHome } from '@/shared/types'
import { headerHeight } from '@/shared/constants'

type SectionHomeProps = {
  section?: CmsSectionHome
}

const useSx = (props: SectionHomeProps): Sx => ({
  root: {
    paddingTop: props.section?.showHeaderPadding ? headerHeight : 0,
    minHeight: 1080,
    height: '80vh',
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
  const { title, desc, type } = section ?? {}
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
