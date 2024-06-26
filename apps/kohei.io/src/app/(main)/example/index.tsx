import { cva, cn } from '@repo/ui/src/utils/cva'

const styles = {
  root: cva('')
}

const Page: React.FC = () => {
  return <main className={cn(styles.root())}>test</main>
}

export default Page
