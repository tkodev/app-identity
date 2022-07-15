import React from 'react'
import { AppBar } from '@mui/material'
import { Container } from '~/components/atoms'
import { createSx } from '~/conductors/hooks'

type HeaderBarProps = {
  //
}

const makeSx = createSx<HeaderBarProps>((props, theme) => {
  const { barHeight } = theme.options

  return {
    root: {
      boxShadow: 'none',
      height: barHeight,
      background: theme.options.bgTint,
      backdropFilter: 'blur(10px)',
      gridRow: 1
    },
    container: {
      height: '100%',
      py: 2
    }
  }
})

const HeaderBar: React.FC<HeaderBarProps> = (props) => {
  const { children } = props
  const sx = makeSx(props)

  return (
    <AppBar position="fixed" component="header" sx={sx.root}>
      <Container fixed sx={sx.container}>
        {children}
      </Container>
    </AppBar>
  )
}

export { HeaderBar }
