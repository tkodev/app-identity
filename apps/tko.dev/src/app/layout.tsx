import type { Metadata } from 'next'
import { Favicon } from '#src/components/universals/favicon'
import { allianceNo1Font } from '#src/fonts/alliance-no1'
import { interFont } from '#src/fonts/inter'
import { AppProviders } from '#src/providers/app'
import { cn } from '@repo/ui/utils/theme'
import '#src/themes/tailwind.css'
import '@repo/ui/themes/tailwind.css'

const metadata: Metadata = {
  title: 'tko.dev',
  description: "Tony Ko's Portfolio"
}

type LayoutPageProps = {
  children: React.ReactNode
}

const LayoutPage: React.FC<LayoutPageProps> = (props) => {
  const { children } = props

  return (
    <html lang="en">
      <Favicon />
      <body className={cn(interFont.className, allianceNo1Font)}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}

export { metadata }
export default LayoutPage
