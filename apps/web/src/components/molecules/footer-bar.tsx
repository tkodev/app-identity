import React from 'react'
import { AppBar, Container } from '@mui/material'
import { createSx } from '~/conductors/hooks'

type FooterBarProps = {
  //
}

const useSx = createSx<FooterBarProps>((props, theme) => {
  const { barHeight } = theme.options

  return {
    root: {
      boxShadow: 'none',
      minHeight: barHeight,
      backgroundColor: 'rgba(18, 18, 18, 0.25)',
      backgroundImage: 'none',
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
