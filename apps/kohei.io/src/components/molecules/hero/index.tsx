import { cva, cn, type VariantProps } from '@repo/ui/src/utils/cva'

const styles = {
  root: cva('w-full h-screen', {
    variants: {},
    defaultVariants: {}
  })
}

type HeroProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Hero: React.FC<HeroProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <div className={cn(styles.root({ className }))} {...rest}>
      {children}
    </div>
  )
}

export { Hero }
