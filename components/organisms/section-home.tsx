import React from 'react'
import { Box } from '@mui/material'
import { Sx, CmsSectionHome } from '@/shared/types'

type SectionHomeProps = {
  section?: CmsSectionHome
}

const useSx = (props: SectionHomeProps): Sx => ({
  root: {}
})

const SectionHome: React.FC<SectionHomeProps> = (props) => {
  const { section, children } = props
  const sx = useSx(props)

  return <Box sx={sx.root}>{children}</Box>
}

export { SectionHome }
