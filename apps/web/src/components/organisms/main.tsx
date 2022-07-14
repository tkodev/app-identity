import React from 'react'
import { Box } from '@mui/material'
import { createSx } from '~/conductors/hooks'

type MainProps = {
  //
}

const makeSx = createSx<MainProps>((props) => {
  return {
    root: {
      gridRow: 2
    }
  }
})

const Main: React.FC<MainProps> = (props) => {
  const { children } = props
  const sx = makeSx(props)

  return (
    <Box sx={sx.root} component="main">
      {children}
    </Box>
  )
}

export { Main }
