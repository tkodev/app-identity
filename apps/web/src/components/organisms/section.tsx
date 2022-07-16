import React from 'react'
import { Entry } from 'contentful'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Container, Image } from '~/components/atoms'
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
      background: bgImageSx ?? bgColor
    },
    container: {
      minHeight: '100vh',
      height: 'auto',
      display: 'grid',
      gridTemplateRows: 'min-content 1fr min-content',
      pt: sectionIndex === 0 ? barHeight : 2,
      pb: 2
    },
    sectionHeader: {
      gridRow: 1,
      pt: 4
    },
    sectionMain: {
      gridRow: 2,
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'column'
    },
    sectionFooter: {
      gridRow: 3,
      paddingTop: 4
    },
    title: {
      mb: 2
    },
    desc: {
      mb: 4
    },
    image: {
      textAlign: 'center',
      p: 4
    }
  }
})

const Section: React.VFC<SectionProps> = (props) => {
  const { section } = props
  const { title, desc, variant, image, navMenu } = section?.fields ?? {}
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
          {variant === 'hero' && (
            <Grid container>
              <Grid item xs={12} sm={10} md={8} lg={6}>
                <RenderMarkdown sx={sx.desc}>{desc}</RenderMarkdown>
                {navMenu &&
                  navMenu.fields.navs.map((nav) => (
                    <Button sx={sx.button} variant="outlined" href={nav.fields.path} key={nav.fields.alias}>
                      {nav.fields.title}
                    </Button>
                  ))}
              </Grid>
            </Grid>
          )}
          {variant === 'split' && (
            <Grid container alignItems="center">
              <Grid item xs={12} md={6} order={{ xs: 1, md: 0 }}>
                <RenderMarkdown>{desc}</RenderMarkdown>
                {navMenu &&
                  navMenu.fields.navs.map((nav) => (
                    <Button variant="outlined" href={nav.fields.path} key={nav.fields.alias}>
                      {nav.fields.title}
                    </Button>
                  ))}
              </Grid>
              <Grid item sx={sx.image} xs={12} md={6}>
                <Image
                  src={image?.fields.file.url || ''}
                  alt={image?.fields.title || ''}
                  width="75%"
                  aspectRatio="1:1"
                  fit="cover"
                  borderRadius="100%"
                />
              </Grid>
            </Grid>
          )}
        </Box>
        <Box sx={sx.sectionFooter} />
      </Container>
    </Box>
  )
}

export { Section }
