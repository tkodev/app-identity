import { cva, cn, type VariantProps } from '@repo/ui/src/utils/cva'

const styles = {
  root: cva('', {
    variants: {},
    defaultVariants: {}
  })
}

type LayoutProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Layout: React.FC<LayoutProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <div className={cn(styles.root({ className }))} {...rest}>
      {children}
    </div>
  )
}

export { Layout }
