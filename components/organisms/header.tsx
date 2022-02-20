import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    gridRow: 1
  }
})

const Header: React.FC = (props) => {
  const { children } = props
  const styles = useStyles(props)

  return (
    <header className={styles.root}>
      header
      {children}
    </header>
  )
}

export { Header }
