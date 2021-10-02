import { FC } from 'react'

// types
type ExampleProps = {
  title?: string
}

// components
const Example: FC<ExampleProps> = (props) => {
  const { title }= props
  return (
    <p>{title}</p>
  )
}

// export
export { Example }
