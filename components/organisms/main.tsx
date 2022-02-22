import React from 'react'
import { Box } from '@mui/material'
import { Sx } from '@/shared/types'

type MainProps = {}

const useSx = (props: MainProps): Sx => ({
  root: {
    gridRow: 2,
    paddingTop: 1,
    paddingBottom: 1
  }
})

const Main: React.FC = (props) => {
  const { children } = props
  const sx = useSx(props)

  return (
    <Box component="main" sx={sx.root}>
      main
      {children}
    </Box>
  )
}

export { Main }
