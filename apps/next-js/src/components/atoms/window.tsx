import { clsx } from 'clsx'

type WindowProps = {
  fontVariables?: string[]
  children?: React.ReactNode
}

const windowStyles = (fontVariables: string[]) =>
  clsx(['h-full', 'relative', 'font-base', 'font-weight-regular', 'text-core-base', 'text-text-dark-1', 'bg-paper-dark-1'])

const Window: React.FC<WindowProps> = (props) => {
  const { fontVariables = [], children } = props

  return <div className={windowStyles(fontVariables)}>{children}</div>
}

export { Window }
