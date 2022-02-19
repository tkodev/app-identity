import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    gridRow: 3,
  }
})

const Footer: React.FC = (props) => {
  const { children } = props
  const styles = useStyles(props)

  return (
    <footer className={styles.root}>
      footer
      {children}
    </footer>
  )
}

export { Footer }
