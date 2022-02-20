import React from 'react'
import { Box } from '@mui/material'

type HeaderProps = {}

const useSx = (props: HeaderProps) => ({
  root: {
    gridRow: 1
  }
})

const Header: React.FC = (props) => {
  const { children } = props
  const styles = useSx(props)

  return (
    <Box component="header" sx={styles.root}>
      header
      {children}
    </Box>
  )
}

export { Header }
