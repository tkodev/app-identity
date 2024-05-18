import type { ReactNode } from 'react'
import { cva, cn, type VariantProps } from '../utils/cva'

const styles = {
  root: cva(
    'flex flex-col ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors ui-border-neutral-700 hover:ui-bg-neutral-800/30'
  ),
  h2: cva('ui-mb-3 ui-text-2xl ui-font-semibold text-center'),
  span: cva('ui-inline-block'),
  p: cva('ui-m-0 ui-max-w-[30ch] ui-text-sm ui-opacity-50 text-center')
}

type CardProps = VariantProps<typeof styles.root> & {
  title: string
  children: ReactNode
  href: string
}

const Card: React.FC<CardProps> = (props) => {
  const { title, children, href } = props

  return (
    <a className={cn(styles.root())} href={href} rel="noopener noreferrer" target="_blank">
      <h2 className={cn(styles.h2())}>
        {title} <span className={cn(styles.span())}>-&gt;</span>
      </h2>
      <p className={cn(styles.p())}>{children}</p>
    </a>
  )
}

export { Card }
