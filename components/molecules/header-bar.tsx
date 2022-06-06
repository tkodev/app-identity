import React from 'react'
import { createSx } from '@/conductors/hooks'
import { AppBar, Container } from '@mui/material'

type HeaderBarProps = {
  //
}

const useSx = createSx<HeaderBarProps>((props, theme) => {
  const { headerHeight } = theme.options

  return {
    root: {
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      boxShadow: 'none',
      height: headerHeight,
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
