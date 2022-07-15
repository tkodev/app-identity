import React from 'react'
import { Box } from '@mui/material'
import { createSx } from '~/conductors/hooks'

type SplitterProps = {
  flow?: 'row' | 'column'
}

const makeSx = createSx<SplitterProps>((props, theme) => {
  const { flow = 'row' } = props
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      transform: flow === 'row' ? 'none' : 'rotate(90deg)',
      m: 1
    }
  }
})

const Splitter: React.VFC<SplitterProps> = (props) => {
  const sx = makeSx(props)

  return <Box sx={sx.root}>/</Box>
}

export { Splitter }
