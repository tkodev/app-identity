import '../styles/globals.css'
import '@repo/ui/src/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'kohei.io',
  description: "Tony Ko's Landing Page"
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export { metadata }
export default RootLayout
