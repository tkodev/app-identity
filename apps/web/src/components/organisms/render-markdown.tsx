import React from 'react'
import ReactMarkdown from 'react-markdown'
import RemarkGfm from 'remark-gfm'
import { Box, Divider, Typography } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'

type RenderMarkdownProps = {
  sx?: SxProps<Theme>
}

const RenderMarkdown: React.FC<RenderMarkdownProps> = (props) => {
  const { sx, children } = props

  return (
    <Box sx={sx}>
      <ReactMarkdown
        remarkPlugins={[RemarkGfm]}
        components={{
          h1: ({ node, ...rest }) => <Typography variant="h1" component="p" {...rest} />,
          h2: ({ node, ...rest }) => <Typography variant="h2" component="p" {...rest} />,
          h3: ({ node, ...rest }) => <Typography variant="h3" component="p" {...rest} />,
          h4: ({ node, ...rest }) => <Typography variant="h4" component="p" {...rest} />,
          h5: ({ node, ...rest }) => <Typography variant="h5" component="p" {...rest} />,
          h6: ({ node, ...rest }) => <Typography variant="h6" component="p" {...rest} />,
          p: ({ node, ...rest }) => <Typography variant="body1" component="p" gutterBottom {...rest} />,
          code: ({ node, ...rest }) => <Typography variant="body1" component="code" {...rest} />,
          hr: ({ node, ...rest }) => <Divider sx={{ my: 2 }} {...rest} />,
          ul: ({ node, ordered, ...rest }) => (
            <Typography variant="body1" component="ul" sx={{ paddingInlineStart: 2 }} {...rest} />
          )
        }}
      >
        {children?.toString() || ''}
      </ReactMarkdown>
    </Box>
  )
}

export { RenderMarkdown }
