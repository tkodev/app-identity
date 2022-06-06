import React from 'react'
import { createSx } from '@/conductors/hooks'
import { AppBar, Box, Container, Grid, Button, IconButton } from '@mui/material'

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
    },
    grid: {
      height: '100%'
    },
    logo: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    mobile: {
      height: '100%',
      display: { xs: 'flex', md: 'none' },
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    desktop: {
      height: '100%',
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    icon: {
      margin: 1,
      width: 36,
      height: 36
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
