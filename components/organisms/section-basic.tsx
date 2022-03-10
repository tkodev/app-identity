import React from 'react'
import { Box } from '@mui/material'
import { Sx, CmsSectionBasic } from '@/shared/types'

type SectionBasicProps = {
  section?: CmsSectionBasic
}

const useSx = (props: SectionBasicProps): Sx => ({
  root: {}
})

const SectionBasic: React.FC<SectionBasicProps> = (props) => {
  const { section, children } = props
  const sx = useSx(props)

  return <Box sx={sx.root}>{children}</Box>
}

export { SectionBasic }
