import React from 'react'
import { ContainerProps, Container as MuiContainer } from '@mui/material'
import { createSx } from '~/conductors/hooks'

const makeSx = createSx<ContainerProps>((props, theme) => {
  const { sx, disableGutters } = props

  return {
    root: {
      ...(!disableGutters && {
        px: 3
      }),
      ...sx
    }
  }
})

const Container: React.FC<ContainerProps> = (props) => {
  const { children, ...rest } = props
  const sx = makeSx(props)

  return (
    <MuiContainer {...rest} sx={sx.root}>
      {children}
    </MuiContainer>
  )
}

export { Container }
