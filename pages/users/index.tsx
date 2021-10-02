import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { User } from '@/shared/types'
import { sampleUserData } from '@/shared/constants/sample-data'
import { Layout } from '@/frontend/components/layout'
import { List } from '@/frontend/components/list'

// types
type UsersPageProps = {
  items: User[]
}

// page
const UsersPage: NextPage<UsersPageProps> = (props) => {
  const { items } = props

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={items} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

// ssr
const getStaticProps: GetStaticProps = async () => {
  const items: User[] = sampleUserData
  return { props: { items } }
}

// export
export { getStaticProps }
export default UsersPage
