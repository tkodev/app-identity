import React from 'react'
import { AppBar, Container } from '@mui/material'
import { createSx } from '~/conductors/hooks'

type HeaderBarProps = {
  //
}

const useSx = createSx<HeaderBarProps>((props, theme) => {
  const { barHeight } = theme.options

  return {
    root: {
      boxShadow: 'none',
      minHeight: barHeight,
      backgroundColor: 'rgba(18, 18, 18, 0.25)',
      backgroundImage: 'none',
      backdropFilter: 'blur(10px)',
      gridRow: 1
    },
    container: {
      height: '100%',
      paddingTop: 2,
      paddingBottom: 2
    }
  }
})

const HeaderBar: React.FC<HeaderBarProps> = (props) => {
  const { children } = props
  const sx = useSx(props)

  return (
    <AppBar position="fixed" component="header" sx={sx.root}>
      <Container fixed sx={sx.container}>
        {children}
      </Container>
    </AppBar>
  )
}

export { HeaderBar }
