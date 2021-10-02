import { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '@/frontend/components/layout'

// page
const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

// export
export default IndexPage
