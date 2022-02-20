import React from 'react'
import { Box } from '@mui/material'

type ExampleProps = {}

const useSx = (props: ExampleProps) => ({
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
