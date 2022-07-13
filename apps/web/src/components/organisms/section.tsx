import React from 'react'
import { Entry } from 'contentful'
import { Box, Typography } from '@mui/material'
import { Container } from '~/components/atoms'
import { RenderMarkdown } from '~/components/molecules'
import { createSx } from '~/conductors/hooks'
import { CmsSection } from '~/conductors/types'

type SectionProps = {
  section?: Entry<CmsSection>
  sectionIndex?: number
}

const useSx = createSx<SectionProps>((props, theme) => {
  const { sectionIndex } = props
  const { barHeight } = theme.options
  return {
    root: {},
    container: {
      height: '100%',
      paddingTop: sectionIndex === 0 ? barHeight : 2,
      paddingBottom: 2
    }
  }
})

const Section: React.VFC<SectionProps> = (props) => {
  const { section } = props
  const { title, desc, type, image, attributes } = section?.fields ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      <Container fixed sx={sx.container}>
        <Typography variant="body1" component="p">
          {title}
        </Typography>
        <RenderMarkdown>{desc}</RenderMarkdown>
      </Container>
    </Box>
  )
}

export { Section }
