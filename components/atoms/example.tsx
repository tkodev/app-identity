import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    gridRow: 3,
  }
})

const Example: React.FC = (props) => {
  const { children } = props
  const styles = useStyles(props)

  return (
    <div className={styles.root}>
      example
      {children}
    </div>
  )
}

export { Example }
