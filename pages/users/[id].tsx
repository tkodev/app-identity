import { GetStaticProps, GetStaticPaths, NextPage } from 'next'

import { User } from '@/shared/types'
import { sampleUserData } from '@/shared/constants/sample-data'
import { Layout } from '@/frontend/components/layout'
import { ListDetail } from '@/frontend/components/list'

// types
type UserPageProps = {
  item?: User
  errors?: string
}

// page
const UserPage: NextPage<UserPageProps> = (props) => {
  const { item, errors } = props
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }
  return (
    <Layout
      title={`${
        item ? item.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

// ssr
const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleUserData.map((user) => ({
    params: { id: user.id.toString() },
  }))

  return { paths, fallback: false }
}
const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const item = sampleUserData.find((data) => data.id === Number(id))
    return { props: { item } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

// export
export { getStaticPaths, getStaticProps }
export default UserPage
