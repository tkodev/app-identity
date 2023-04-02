type ContentProps = {
  children?: React.ReactNode
}

const Content: React.FC<ContentProps> = (props) => {
  const { children } = props
  return <>{children}</>
}

export { Content }
