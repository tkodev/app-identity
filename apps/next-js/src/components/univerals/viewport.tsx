type ViewportProps = {
  scale: number
  width: 'device-width'
}

const Viewport: React.FC<ViewportProps> = (props) => {
  const { scale, width } = props

  return (
    <>
      <meta name="viewport" content={`minimum-scale=${scale}, initial-scale=${scale}, width=${width}`} />
    </>
  )
}

export { Viewport }
