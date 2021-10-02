import { FC } from 'react'
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

// types
type ExampleProps = {
  title?: string
}

// styles
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
}));

// components
const Example: FC<ExampleProps> = (props) => {
  const { title } = props
  const styles = useStyles(props)

  return (
    <div className={styles.root}>
      {title}
    </div>
  )
}

// export
export { Example }
