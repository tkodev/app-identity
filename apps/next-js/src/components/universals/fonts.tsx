type FontsProps = {
  fontVariables: string[]
}

const Fonts: React.FC<FontsProps> = (props) => {
  const { fontVariables } = props

  return (
    <>
      <style jsx global>
        {`
          :root {
            ${fontVariables.map((fontVariable) => fontVariable)}
          }
        `}
      </style>
    </>
  )
}

export { Fonts }
