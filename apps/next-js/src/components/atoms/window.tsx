type WindowProps = {
  className?: string
  children?: React.ReactNode
}

const Window: React.FC<WindowProps> = (props) => {
  const { className, children } = props

  return <div className={className}>{children}</div>
}

export { Window }
