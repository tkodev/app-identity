import { cva, cn, type VariantProps } from '#src/utils/theme'

const styles = {
  root: cva('', {
    variants: {},
    defaultVariants: {}
  })
}

type SectionProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Section: React.FC<SectionProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <section className={cn(styles.root({ className }))} {...rest}>
      {children}
    </section>
  )
}

export { Section }
