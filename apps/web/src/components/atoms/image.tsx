import React from 'react'
import { Box } from '@mui/material'
import { Sx, createSx } from '~/conductors/hooks'
import { ratioToPercentStr } from '~/conductors/utils'

type ImageProps = {
  src: string
  alt: string
  sx?: Sx
  width?: string
  height?: string
  aspectRatio?: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  borderRadius?: string
  blockDownload?: boolean
}

const makeSx = createSx<ImageProps>((props) => {
  const {
    sx,
    width = '100%', // ex: 100%, 80px, etc
    height = 'auto', // ex: 100%, 80px, auto, etc
    aspectRatio = '', // ex: 16:9, 4:3, etc
    fit = 'fill', // fill, contain, cover, none, scale-down
    borderRadius = '0',
    blockDownload = false // whether div covers img tag or not.
  } = props
  return {
    root: {
      display: 'inline-block',
      position: 'relative',
      width,
      height,
      lineHeight: 0,
      ...sx
    },
    ratio: {
      width: '100%',
      height: aspectRatio ? 0 : height,
      opacity: 0,
      pb: aspectRatio ? ratioToPercentStr(aspectRatio) : 0
    },
    image: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: fit,
      borderRadius
    },
    blocker: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: !blockDownload ? -1 : 'auto'
    }
  }
})

const Image: React.VFC<ImageProps> = (props) => {
  const { src, alt } = props
  const sx = makeSx(props)

  return (
    <Box sx={sx.root}>
      {/* image aspect ratio sizer */}
      <Box component="img" sx={sx.ratio} src={src} alt={alt} crossOrigin="anonymous" />
      {/* image render */}
      <Box component="img" sx={sx.image} src={src} alt={alt} crossOrigin="anonymous" />
      {/* image download blocker */}
      <Box sx={sx.blocker} />
    </Box>
  )
}

export { Image }
