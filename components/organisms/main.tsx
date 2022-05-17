import React from 'react'
import { Box } from '@mui/material'
import { createSx } from '@/conductors/hooks'

type MainProps = {
  //
}

const useSx = createSx<MainProps>((props) => {
  return {
    root: {
      gridRow: 2
    }
  }
})

const Main: React.FC<MainProps> = (props) => {
  const { children } = props
  const sx = useSx(props)

  return (
    <Box component="main" sx={sx.root}>
      {children}
    </Box>
  )
}

export { Main }
