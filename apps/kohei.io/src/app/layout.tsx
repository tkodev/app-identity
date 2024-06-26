import type { Metadata } from 'next'

import { Favicon } from '@repo/kohei.io/components/universals/favicon'
import { allianceNo1Font } from '@repo/kohei.io/fonts/alliance-no1'
import { interFont } from '@repo/kohei.io/fonts/inter'
import { cn } from '@repo/ui/src/utils/cva'

import '@repo/kohei.io/styles/globals.css'

const metadata: Metadata = {
  title: 'kohei.io',
  description: "Tony Ko's Landing Page"
}

type LayoutPageProps = {
  children: React.ReactNode
}

const LayoutPage: React.FC<LayoutPageProps> = (props) => {
  const { children } = props

  return (
    <html lang="en">
      <Favicon />
      <body className={cn(interFont.className, allianceNo1Font)}>{children}</body>
    </html>
  )
}

export { metadata }
export default LayoutPage
