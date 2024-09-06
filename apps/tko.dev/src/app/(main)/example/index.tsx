import { cva, cn } from '#src/utils/theme'

const styles = {
  root: cva('')
}

const Page: React.FC = () => {
  return <main className={cn(styles.root())}>test</main>
}

export default Page
