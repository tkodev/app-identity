import React from 'react'
import { Box } from '@mui/material'
import { Sx } from '@/shared/types'

type FooterProps = {}

const useSx = (props: FooterProps): Sx => ({
  root: {
    gridRow: 3
  }
})

const Footer: React.FC<FooterProps> = (props) => {
  const { children } = props
  const sx = useSx(props)

  return (
    <Box component="footer" sx={sx.root}>
      {children}
    </Box>
  )
}

export { Footer }
