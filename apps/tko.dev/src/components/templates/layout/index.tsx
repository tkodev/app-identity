import { cva, cn, type VariantProps } from '#src/utils/theme'
import { Header } from '#src/components/organisms/header'
import { Main } from '#src/components/organisms/main'
import { Footer } from '#src/components/organisms/footer'

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
      <Header>
      {children}
      <Footer/>
    </div>
  )
}

export { Layout }
