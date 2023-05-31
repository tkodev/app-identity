import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'

type ExampleProps = {
  children?: React.ReactNode
}

const exampleStyles = cva('example', {
  variants: {
    variant: {
      primary: ['relative']
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

const exampleStyles2 = () => clsx(['h-full', 'relative', 'font-base'])

const Example: React.FC<ExampleProps> = (props) => {
  const {} = props

  return <div className={clsx(exampleStyles(), exampleStyles2())}></div>
}

export { Example }
