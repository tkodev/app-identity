import React from 'react'
import { ContainerProps, Container as MuiContainer } from '@mui/material'
import { createSx } from '~/conductors/hooks'

const useSx = createSx<ContainerProps>((props, theme) => {
  const { sx } = props

  return {
    root: {
      ...sx,
      paddingLeft: 3,
      paddingRight: 3
    }
  }
})

const Container: React.FC<ContainerProps> = (props) => {
  const { children, ...rest } = props
  const sx = useSx(props)

  return (
    <MuiContainer {...rest} sx={sx.root}>
      {children}
    </MuiContainer>
  )
}

export { Container }
