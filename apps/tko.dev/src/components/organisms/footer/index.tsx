import { cva, cn, type VariantProps } from '#src/utils/theme'

const styles = {
  root: cva('', {
    variants: {},
    defaultVariants: {}
  })
}

type FooterProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Footer: React.FC<FooterProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <footer className={cn(styles.root({ className }))} {...rest}>
      {children}
    </footer>
  )
}

export { Footer }
