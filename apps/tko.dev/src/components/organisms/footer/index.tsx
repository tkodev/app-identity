import { cva, cn, type VariantProps } from '#src/utils/theme'

const styles = {
  root: cva([
    'fixed bottom-[16px] left-1/2 -translate-x-1/2',
    'w-auto h-auto max-w-full p-[16px]'
  ]),
  container: cva('rounded-xxl border-[1px] border-stroke-neutral-low bg-background-neutral-low backdrop-blur-lg p-[24px]')
}

type FooterProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
  //
}

const Footer: React.FC<FooterProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <footer className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.container())}>
        {/* face / favicon hover
        logo
        nav
          works
          photo
          about
        omnisearch */}
      </div>
    </footer>
  )
}

export { Footer }
