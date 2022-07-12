import React from 'react'
import { Box } from '@mui/material'
import { createSx } from '~/conductors/hooks'

type NavSeparatorProps = {
  flow?: 'row' | 'column'
}

const useSx = createSx<NavSeparatorProps>((props, theme) => {
  const { flow = 'row' } = props
  return {
    root: {
      margin: 1,
      transform: flow === 'row' ? 'none' : 'rotate(90deg)'
    }
  }
})

const NavSeparator: React.VFC<NavSeparatorProps> = (props) => {
  const sx = useSx(props)

  return <Box sx={sx.root}>|</Box>
}

export { NavSeparator }
