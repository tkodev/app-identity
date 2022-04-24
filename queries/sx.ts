import { SxProps, Theme, useTheme } from '@mui/material/styles'

type Sx = Record<string, SxProps<Theme>>
type Styles<Props> = (props: Props, theme: Theme) => Sx

const makeSx = <Props>(styles: Styles<Props>) => {
  const useSx = (props: Props) => {
    const theme = useTheme()
    return styles(props, theme)
  }
  return useSx
}

export { makeSx }
