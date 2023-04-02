type WindowProps = {
  children?: React.ReactNode
}

const Window: React.FC<WindowProps> = (props) => {
  const { children } = props

  return <div>{children}</div>
}

export { Window }
