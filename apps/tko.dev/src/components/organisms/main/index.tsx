import { cva, cn, type VariantProps } from '#src/utils/theme'

const styles = {
  root: cva('p-[16px] bg-background-neutral-low'),
  container: cva('rounded-xxl bg-black')
}

type MainProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Main: React.FC<MainProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <main className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.container())}>
      {children}
      </div>
    </main>
  )
}

export { Main }
