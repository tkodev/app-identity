'use client'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props

  return <>{children}</>
}

export default Layout
