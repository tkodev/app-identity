import React from 'react'
import { round as _round } from 'lodash'
import { Box } from '@mui/material'
import { Sx } from '@/shared/types'

// types
type ImageProps = {
  src: string
  alt: string
  width?: string
  height?: string
  aspectRatio?: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  blockDownload?: boolean
}

// styles
const useSx = (props: ImageProps): Sx => {
  const { width, height, aspectRatio, fit, blockDownload } = props
  return {
    root: {
      display: 'inline-block',
      position: 'relative',
      width,
      height,
      lineHeight: 0
    },
    ratio: {
      width: '100%',
      height: aspectRatio ? 0 : height,
      paddingBottom: aspectRatio ? ratioToPercentStr(aspectRatio) : 0,
      opacity: 0
    },
    image: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: fit
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
}

// helpers
const ratioToPercentStr = (aspectRatio: string) => {
  const ratio =
    aspectRatio
      .split(':')
      .map(Number)
      .reduce((prev, cur) => cur / prev) || 0
  const decimal = _round(ratio, 4)
  const percent = `${decimal * 100}%`
  return percent
}

// component
const Image: React.VFC<ImageProps> = (props) => {
  const {
    src,
    alt,
    width = '100%', // ex: 100%, 80px, etc
    height = 'auto', // ex: 100%, 80px, auto, etc
    aspectRatio = '', // ex: 16:9, 4:3, etc
    fit = 'fill', // fill, contain, cover, none, scale-down
    blockDownload = false // whether div covers img tag or not.
  } = props
  const sx = useSx({ src, alt, width, height, aspectRatio, fit, blockDownload })

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

// export
export { Image }
