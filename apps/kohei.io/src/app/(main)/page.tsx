import { Gradient } from '#src/components/atoms/gradient/index'
import { links } from '#src/constants/links'
import { cva, cn } from '#src/utils/theme'
import { Card } from '@repo/ui/components/card'
import Image from 'next/image'

const styles = {
  root: cva('flex flex-col items-center justify-center min-h-screen p-24'),
  header: cva('items-center justify-center w-full max-w-5xl font-mono text-sm lg:flex'),
  headerBar: cva(
    'fixed top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border-b bg-gradient-to-b backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30'
  ),
  container: cva('relative flex place-items-center'),
  content: cva('font-sans w-auto py-16 flex justify-between gap-8 items-center flex-col relative'),
  contentGradient: cva('top-[-350px] opacity-[0.15] w-[1000px] h-[1000px]'),
  circleContainer: cva('flex items-center justify-center w-full'),
  circle: cva('absolute min-w-[614px] min-h-[614px]'),
  gradientContainer: cva('absolute flex items-center justify-center w-64 h-64'),
  gradient: cva('opacity-90 w-[120px] h-[120px]'),
  signature: cva('z-10'),
  desc: cva('flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6'),
  footer: cva('z-20 w-[200px]')
}

const Page: React.FC = () => {
  return (
    <main className={cn(styles.root())}>
      <div className={cn(styles.header())}>
        <p className={cn(styles.headerBar())}>@kohei.io</p>
      </div>

      <div className={cn(styles.container())}>
        <div className={cn(styles.content())}>
          <Gradient className={cn(styles.contentGradient())} conic />
          <div className={cn(styles.circleContainer())}>
            <div className={cn(styles.circle())}>
              <Image alt="Circles" height={614} src="/images/circles.svg" width={614} />
            </div>
            <div className={cn(styles.gradientContainer())}>
              <Gradient className={cn(styles.gradient())} conic small />
            </div>

            <div className={cn(styles.signature())}>
              <Image
                alt="Tony's Signature"
                height={132}
                src="/images/signature-dark@2x.png"
                width={282}
              />
            </div>
          </div>
          <div className={cn(styles.desc())}>You&apos;ve made it this far. Follow me.</div>
        </div>
      </div>

      <div className={cn(styles.footer())}>
        {links.map(({ title, href, description }) => (
          <Card href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  )
}

export default Page
