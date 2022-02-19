import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  }
})

const Main: React.FC = (props) => {
  const { children } = props
  const styles = useStyles(props)

  return (
    <main className={styles.root}>
      main
      {children}
    </main>
  )
}

export { Main }
