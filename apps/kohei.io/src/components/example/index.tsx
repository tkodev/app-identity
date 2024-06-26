import { cva, cn, type VariantProps } from '@repo/ui/src/utils/cva'

const styles = {
  root: cva('', {
    variants: {},
    defaultVariants: {}
  })
}

type ExampleProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Example: React.FC<ExampleProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <div className={cn(styles.root({ className }))} {...rest}>
      {children}
    </div>
  )
}

export { Example }
