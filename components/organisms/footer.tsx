import React from 'react'
import { Box } from '@mui/material'

type FooterProps = {}

const useSx = (props: FooterProps) => ({
  root: {
    gridRow: 3
  }
})

const Footer: React.FC<FooterProps> = (props) => {
  const { children } = props
  const styles = useSx(props)

  return (
    <Box component="footer" sx={styles.root}>
      footer
      {children}
    </Box>
  )
}

export { Footer }
