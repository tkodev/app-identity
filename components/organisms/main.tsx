import React from 'react'
import { Box } from '@mui/material'

type MainProps = {}

const useSx = (props: MainProps) => ({
  root: {
    gridRow: 2
  }
})

const Main: React.FC = (props) => {
  const { children } = props
  const styles = useSx(props)

  return (
    <Box component="main" sx={styles.root}>
      main
      {children}
    </Box>
  )
}

export { Main }
