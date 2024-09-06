import { cva, cn, type VariantProps } from '#src/utils/theme'

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
    <section className={cn(styles.root({ className }))} {...rest}>
      {children}
    </section>
  )
}

export { Hero }
