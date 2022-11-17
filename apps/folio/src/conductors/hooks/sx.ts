import { SxProps, Theme } from '@mui/material/styles'
import { theme } from '~/conductors/utils/theme'

type Sx<SxKey extends string = string> = Record<SxKey, SxProps<Theme>>

const createSx = <Props = {}, SxKey extends string = string>(getSx: (props: Props, theme: Theme) => Sx<SxKey>) => {
  const makeSx = (props: Props) => getSx(props, theme)
  return makeSx
}

export { createSx }
export type { Sx }
