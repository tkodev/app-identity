import { SxProps, Theme, useTheme } from '@mui/material/styles'

type Sx = Record<string, SxProps<Theme>>

const createSx = <T>(styles: (props: T, theme: Theme) => Sx) => {
  const useSx = (props: T) => {
    const theme = useTheme()
    return styles(props, theme)
  }
  return useSx
}

export { createSx }
export type { Sx }
