type ViewportProps = {
  scale?: number
  width?: string
}

const Viewport: React.FC<ViewportProps> = (props) => {
  const { scale = 1, width = 'device-width' } = props
  const content = `minimum-scale=${scale}, initial-scale=${scale}, width=${width}`
  return <meta name="viewport" content={content} />
}

export { Viewport }
