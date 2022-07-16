import React from 'react'
import { Entry } from 'contentful'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Container, Image } from '~/components/atoms'
import { RenderMarkdown } from '~/components/organisms'
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

  const offset = `${parseInt(barHeight) + parseInt(theme.spacing(4))}px`
  const bg = bgImage && `${theme.options.bgTint}, url("${bgImage?.fields.file.url}") center / cover no-repeat`
  const isSplit = section?.fields.variant === 'split'

  return {
    root: {
      background: bg ?? bgColor
    },
    container: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplate: {
        xs: `
          "intro" min-content
          "image" min-content
          "content" 1fr
          "outro" min-content
        `,
        md: `
          "intro intro" min-content
          "content image" 1fr
          "outro outro" min-content /
          minmax(0, 55%) minmax(0, 45%)
        `
      },
      placeItems: 'center start',
      gap: 4,
      pt: sectionIndex === 0 ? offset : 4,
      pb: 4
    },
    intro: {
      gridArea: 'intro'
    },
    image: {
      gridArea: 'image',
      placeSelf: 'center center',
      display: isSplit ? 'block' : 'none',
      width: { xs: '60%', md: '75%', lg: '60%' },
      textAlign: 'center'
    },
    content: {
      gridArea: 'content'
    },
    contentDesc: {
      pb: 2
    },
    outro: {
      gridArea: 'outro'
    },
    sectionFooter: {
      gridRow: 3,
      pt: 4
    }
  }
})

const Section: React.VFC<SectionProps> = (props) => {
  const { section } = props
  const { title, desc, image, navMenu } = section?.fields ?? {}
  const sx = makeSx(props)

  return (
    <Box sx={sx.root}>
      <Container fixed sx={sx.container}>
        <Box sx={sx.intro}>
          <Typography variant="subtitle1" component="h2" sx={sx.title}>
            &gt; {title} / ※
          </Typography>
        </Box>
        <Box sx={sx.content}>
          <RenderMarkdown sx={sx.contentDesc}>{desc}</RenderMarkdown>
          {navMenu &&
            navMenu.fields.navs.map((nav) => (
              <Button variant="outlined" href={nav.fields.path} key={nav.fields.alias}>
                {nav.fields.title}
              </Button>
            ))}
        </Box>
        <Box sx={sx.image}>
          <Image
            src={image?.fields.file.url}
            alt={image?.fields.title}
            width="100%"
            aspectRatio="1:1"
            fit="cover"
            borderRadius="100%"
          />
        </Box>
        <Box sx={sx.outro} />
      </Container>
    </Box>
  )
}

export { Section }
