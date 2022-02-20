import React from 'react'
import { Box } from '@mui/material'
import { Sx } from '@/shared/types'

type ExampleProps = {}

const useSx = (props: ExampleProps): Sx => ({
  root: {
    gridRow: 3
  }
})

const Example: React.FC<ExampleProps> = (props) => {
  const { children } = props
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      example
      {children}
    </Box>
  )
}

export { Example }
