import { FC } from 'react'
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

// types
type MainProps = {}

// styles
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    gridColumn: '1 / -1',
  },
}));

// components
const Main: FC<MainProps> = (props) => {
  const { children } = props
  const styles = useStyles(props)

  return (
    <main className={styles.root}>
      Main
      {children}
    </main>
  )
}

// export
export { Main }
