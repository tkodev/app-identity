import React from 'react'
import { Box } from '@mui/material'
import { Sx } from '@/shared/types'

type HeaderProps = {}

const useSx = (props: HeaderProps): Sx => ({
  root: {
    gridRow: 1
  }
})

const Header: React.FC = (props) => {
  const { children } = props
  const sx = useSx(props)

  return (
    <Box component="header" sx={sx.root}>
      header
      {children}
    </Box>
  )
}

export { Header }
