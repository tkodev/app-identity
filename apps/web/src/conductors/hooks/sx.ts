import { SxProps, Theme } from '@mui/material/styles'
import { theme } from '~/conductors/utils/theme'

type Sx = Record<string, SxProps<Theme>>

const createSx = <T>(styles: (props: T, theme: Theme) => Sx) => {
  const makeSx = (props: T) => {
    return styles(props, theme)
  }
  return makeSx
}

export { createSx }
export type { Sx }
