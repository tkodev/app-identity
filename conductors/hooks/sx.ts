import { SxProps, Theme, useTheme } from '@mui/material/styles'

const createSx = <T>(styles: (props: T, theme: Theme) => Record<string, SxProps<Theme>>) => {
  const useSx = (props: T) => {
    const theme = useTheme()
    return styles(props, theme)
  }
  return useSx
}

export { createSx }
