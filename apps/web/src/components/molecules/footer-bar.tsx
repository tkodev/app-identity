import React from 'react'
import { AppBar, Container } from '@mui/material'
import { createSx } from '~/conductors/hooks'

type FooterBarProps = {
  //
}

const useSx = createSx<FooterBarProps>((props, theme) => {
  const { headerHeight } = theme.options

  return {
    root: {
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      boxShadow: 'none',
      height: headerHeight,
      backdropFilter: 'blur(10px)',
      gridRow: 3
    },
    container: {
      height: '100%',
      paddingTop: 2,
      paddingBottom: 2
    }
  }
})

const FooterBar: React.FC<FooterBarProps> = (props) => {
  const { children } = props
  const sx = useSx(props)

  return (
    <AppBar position="static" component="footer" sx={sx.root}>
      <Container fixed sx={sx.container}>
        {children}
      </Container>
    </AppBar>
  )
}

export { FooterBar }
