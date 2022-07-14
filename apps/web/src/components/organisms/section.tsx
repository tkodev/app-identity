import React from 'react'
import { Entry } from 'contentful'
import { Box, Button, Grid } from '@mui/material'
import { Container } from '~/components/atoms'
import { RenderMarkdown } from '~/components/molecules'
import { createSx } from '~/conductors/hooks'
import { CmsSection } from '~/conductors/types'

type SectionProps = {
  section?: Entry<CmsSection>
  sectionIndex?: number
}

const useSx = createSx<SectionProps>((props, theme) => {
  const { sectionIndex, section } = props
  const { bgImage, bgColor } = section?.fields ?? {}
  const { barHeight } = theme.options
  const bgImageSx = bgImage && `${theme.options.bgTint}, url("${bgImage?.fields.file.url}") center / cover no-repeat`

  return {
    root: {
      background: bgImageSx ?? bgColor,
      minHeight: '720px',
      height: '100vh'
    },
    container: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'column',
      paddingTop: sectionIndex === 0 ? barHeight : 2,
      paddingBottom: 2
    },
    gridItem: {
      height: '100%',
      position: 'relative'
    },
    button: {
      marginTop: 4
    }
  }
})

const Section: React.VFC<SectionProps> = (props) => {
  const { section } = props
  const { title, desc, nav } = section?.fields ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      <Container fixed sx={sx.container}>
        <Grid container>
          <Grid item xs={12} sm={6} sx={sx.gridItem}>
            <RenderMarkdown>{desc}</RenderMarkdown>
            {nav && (
              <Button sx={sx.button} variant="outlined" href={nav.fields.path}>
                {nav.fields.title}
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export { Section }
