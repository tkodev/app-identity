import React from 'react'
import { Entry } from 'contentful'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '~/components/atoms'
import { RenderMarkdown } from '~/components/molecules'
import { createSx } from '~/conductors/hooks'
import { CmsSection } from '~/conductors/types'

type SectionProps = {
  section?: Entry<CmsSection>
  sectionIndex?: number
}

const makeSx = createSx<SectionProps>((props, theme) => {
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
      paddingTop: sectionIndex === 0 ? barHeight : 2,
      paddingBottom: 2,
      display: 'grid',
      gridTemplateRows: 'min-content 1fr'
    },
    sectionHeader: {
      gridRow: 1,
      paddingTop: 4
    },
    sectionMain: {
      gridRow: 2,
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'column'
    },
    button: {
      marginTop: 4
    }
  }
})

const Section: React.VFC<SectionProps> = (props) => {
  const { section } = props
  const { title, desc, nav } = section?.fields ?? {}
  const sx = makeSx(props)

  return (
    <Box sx={sx.root}>
      <Container fixed sx={sx.container}>
        <Box sx={sx.sectionHeader}>
          <Typography variant="subtitle1" component="h2" sx={sx.title}>
            &gt; {title} / ※
          </Typography>
        </Box>
        <Box sx={sx.sectionMain}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <RenderMarkdown>{desc}</RenderMarkdown>
              {nav && (
                <Button sx={sx.button} variant="outlined" href={nav.fields.path}>
                  {nav.fields.title}
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export { Section }
