import { Layout } from '@repo/kohei.io/components/templates/layout'

type LayoutPageProps = {
  children: React.ReactNode
}

const LayoutPage: React.FC<LayoutPageProps> = (props) => {
  const { children } = props

  return <Layout>{children}</Layout>
}

export default LayoutPage
