import { cva } from 'class-variance-authority'
import Toggle from '@radix-ui/react-toggle'
import { FontItalicIcon } from '@radix-ui/react-icons'

const button = cva('button', {
  variants: {
    intent: {
      primary: ['bg-blue-500', 'text-white', 'border-transparent', 'hover:bg-blue-600'],
      secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100']
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4']
    }
  },
  compoundVariants: [{ intent: 'primary', size: 'medium', class: 'uppercase' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
})

type ExampleProps = {
  className?: string
  children?: React.ReactNode
}

const Example: React.FC<ExampleProps> = (props) => {
  const { className, children } = props

  const intent = 'secondary'
  const size = 'small'

  return (
    <Toggle.Root className={button({ intent, size, className })} aria-label="Toggle italic">
      <FontItalicIcon />
      {children}
    </Toggle.Root>
  )
}

export { Example }
