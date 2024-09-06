import { cva, cn, type VariantProps } from '#src/utils/theme'

const styles = {
  root: cva('', {
    variants: {},
    defaultVariants: {}
  })
}

type HeaderProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Header: React.FC<HeaderProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <header className={cn(styles.root({ className }))} {...rest}>
      {children}
    </header>
  )
}

export { Header }
