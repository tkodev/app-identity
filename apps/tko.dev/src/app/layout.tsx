import type { Metadata } from 'next'
import { Favicon } from '#src/components/universals/favicon'
import { allianceNo1Font } from '#src/fonts/alliance-no1'
import { interFont } from '#src/fonts/inter'
import { AppProviders } from '#src/providers/app'
import { cn, cva } from '@repo/ui/utils/theme'
import '#src/themes/theme.css'
import '@repo/ui/themes/theme.css'
import '@repo/ui/themes/theme-light.css'
import '@repo/ui/themes/theme-dark.css'

const styles = {
  html: cva('w-full h-full'),
  body: cva(
    'w-full h-full font-inter text-body-md font-normal bg-background-forced-surface-sunken text-foreground-neutral-high'
  )
}

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
    <html lang="en" className={cn(styles.html())} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Favicon />
      </head>
      <body className={cn(styles.body(), interFont.className, allianceNo1Font)} suppressHydrationWarning>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}

export { metadata }
export default LayoutPage
