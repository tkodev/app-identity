import React from 'react'
import ReactMarkdown from 'react-markdown'
import RemarkGfm from 'remark-gfm'
import { Typography } from '@mui/material'

const RenderMarkdown: React.FC = (props) => {
  const { children } = props

  return (
    <ReactMarkdown
      remarkPlugins={[RemarkGfm]}
      components={{
        h1: ({ node, ...props }) => <Typography variant="h1" component="h2" {...props} />,
        h2: ({ node, ...props }) => <Typography variant="h2" component="h2" {...props} />,
        h3: ({ node, ...props }) => <Typography variant="h3" component="h3" {...props} />,
        h4: ({ node, ...props }) => <Typography variant="h4" component="h4" {...props} />,
        h5: ({ node, ...props }) => <Typography variant="h5" component="h5" {...props} />,
        h6: ({ node, ...props }) => <Typography variant="h6" component="h6" {...props} />,
        p: ({ node, ...props }) => <Typography variant="body1" component="p" {...props} />,
        code: ({ node, ...props }) => <Typography variant="body1" component="code" {...props} />
      }}
    >
      {children?.toString() || ''}
    </ReactMarkdown>
  )
}

export { RenderMarkdown }
