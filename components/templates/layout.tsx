import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/organisms/header'
import { Footer } from '@/components/organisms/footer'
import { Main } from '@/components/organisms/main'
import { makeStyles } from '@mui/styles';

type LayoutProps = {
  title?: string
  desc?: string
}

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: 'min-content 1fr min-content',
  }
})

const Layout: React.FC<LayoutProps> = (props) => {
  const { title, desc, children } = props 
  const styles = useStyles(props)

  return (
    <div className={styles.root}>
      <Head>
        {title && <title>{title}</title>}
        {desc && <meta name="description" content={desc} />}
      </Head>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
      layout
    </div>
  )
}

export { Layout }
