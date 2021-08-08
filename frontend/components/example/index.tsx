import * as React from 'react'

// types
type ExampleProps = {
  title?: string
}

// components
const Example = ({ title }: ExampleProps) => (
  <p>{title}</p>
)

// export
export { Example }
