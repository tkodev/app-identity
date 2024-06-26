import type { Metadata } from 'next'

import { Favicon } from '@repo/kohei.io/components/favicon'
import { allianceNo1Font } from '@repo/kohei.io/fonts/alliance-no1'
import { interFont } from '@repo/kohei.io/fonts/inter'
import { cn } from '@repo/ui/src/utils/cva'

import '@repo/kohei.io/styles/globals.css'

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
      <Favicon />
      <body className={cn(interFont.className, allianceNo1Font)}>{children}</body>
    </html>
  )
}

export { metadata }
export default RootLayout
