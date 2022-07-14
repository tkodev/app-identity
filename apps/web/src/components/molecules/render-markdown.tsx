import React from 'react'
import ReactMarkdown from 'react-markdown'
import RemarkGfm from 'remark-gfm'
import { Divider, Typography } from '@mui/material'

const RenderMarkdown: React.FC = (props) => {
  const { children } = props

  return (
    <ReactMarkdown
      remarkPlugins={[RemarkGfm]}
      components={{
        h1: ({ node, ...props }) => <Typography variant="h1" component="p" {...props} />,
        h2: ({ node, ...props }) => <Typography variant="h2" component="p" {...props} />,
        h3: ({ node, ...props }) => <Typography variant="h3" component="p" {...props} />,
        h4: ({ node, ...props }) => <Typography variant="h4" component="p" {...props} />,
        h5: ({ node, ...props }) => <Typography variant="h5" component="p" {...props} />,
        h6: ({ node, ...props }) => <Typography variant="h6" component="p" {...props} />,
        p: ({ node, ...props }) => <Typography variant="body1" component="p" {...props} />,
        code: ({ node, ...props }) => <Typography variant="body1" component="code" {...props} />,
        hr: ({ node, ...props }) => <Divider sx={{ marginTop: 2, marginBottom: 2 }} {...props} />,
        ul: ({ node, ordered, ...props }) => (
          <Typography variant="body1" component="ul" sx={{ paddingInlineStart: 2 }} {...props} />
        )
      }}
    >
      {children?.toString() || ''}
    </ReactMarkdown>
  )
}

export { RenderMarkdown }
