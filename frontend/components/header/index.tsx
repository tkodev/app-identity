import { FC } from 'react'
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

// types
type HeaderProps = {}

// styles
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    gridColumn: '1 / -1',
  },
}));

// components
const Header: FC<HeaderProps> = (props) => {
  const { children } = props
  const styles = useStyles(props)

  return (
    <header className={styles.root}>
      Header
      {children}
    </header>
  )
}

// export
export { Header }
