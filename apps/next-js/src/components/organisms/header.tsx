import { clsx } from 'clsx'

type HeaderProps = {
  children?: React.ReactNode
}

const styles = {
  header: () => clsx(['h-[96px]', 'w-full', 'fixed', 'py-md']),
  container: () => clsx(['h-full', 'container', 'px-lg', 'mx-auto', 'border-t-2', 'border-paper-dark-3'])
}
const Header: React.FC<HeaderProps> = (props) => {
  const {} = props

  return (
    <header className={styles.header()}>
      <div className={styles.container()}></div>
    </header>
  )
}

export { Header }
