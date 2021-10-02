import { FC } from 'react'
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

// types
type FooterProps = {}

// styles
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    gridColumn: '1 / -1',
  },
}));

// components
const Footer: FC<FooterProps> = (props) => {
  const { children } = props
  const styles = useStyles(props)

  return (
    <footer className={styles.root}>
      Footer
      {children}
    </footer>
  )
}

// export
export { Footer }
