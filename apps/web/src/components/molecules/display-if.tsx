import React from 'react'

type DisplayIfProps = {
  state: boolean
}

const DisplayIf: React.FC<DisplayIfProps> = (props) => {
  const { state, children } = props

  return state ? <>{children}</> : null
}

export { DisplayIf }
