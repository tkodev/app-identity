import { FC } from 'react'
import Head from 'next/head'
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

// types
type LayoutProps = {
  title?: string
}

// styles
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: 'calc(100vh - 10px)',
    display: 'grid',
    gridTemplateColumns: 'minmax(10px, 1fr) minmax(10px, 3fr)',
    gridTemplateRows: 'min-content min-content 1fr min-content',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '100%',
      gridTemplateRows: 'auto',
      '> *': {
        gridColumn: '1 / -1 !important',
        gridRow: 'auto !important',
      }
    }
  },
}));

// components
const Layout: FC<LayoutProps> = (props) => {
  const { title, children } = props
  const styles = useStyles(props)

  return (
  <div className={styles.root}>
    <Head>
      {title && <title>{title}</title>}
    </Head>
    {children}
  </div>
)}

// export
export { Layout }
