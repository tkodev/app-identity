import React from 'react'
import { Box } from '@mui/material'
import { createSx } from '@/conductors/hooks'
import { Entry } from 'contentful'
import { CmsNavMenu } from '@/conductors/types'

type FooterProps = {
  footerMenu?: Entry<CmsNavMenu>
  socialMenu?: Entry<CmsNavMenu>
}

const useSx = createSx<FooterProps>(() => {
  return {
    root: {
      gridRow: 3
    }
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
