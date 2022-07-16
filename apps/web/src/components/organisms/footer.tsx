import React from 'react'
import { Entry } from 'contentful'
import dayjs from 'dayjs'
import { AppBar, Box, Button } from '@mui/material'
import { Container, Image, Splitter } from '~/components/atoms'
import { NavMenu } from '~/components/molecules'
import { createSx } from '~/conductors/hooks'
import { CmsSite } from '~/conductors/types'

type FooterProps = {
  site?: Entry<CmsSite> | null
}

const makeSx = createSx<FooterProps>((props, theme) => {
  const { barHeight } = theme.options

  return {
    root: {
      gridArea: 'footer',
      boxShadow: 'none',
      background: theme.options.bgTint,
      backdropFilter: 'blur(10px)'
    },
    container: {
      height: barHeight,
      display: 'grid',
      gridTemplate: `
        "logo menu" /
        min-content 1fr
      `,
      placeItems: 'center end',
      gap: 1,
      py: 2
    },
    logo: {
      gridArea: 'logo'
    },
    mobileMenu: {
      display: { xs: 'flex', md: 'none' },
      gridArea: 'menu'
    },
    desktopMenu: {
      display: { xs: 'none', md: 'flex' },
      gridArea: 'menu'
    },
    menuButton: {
      width: 36,
      height: 36,
      m: 1
    }
  }
})

const Footer: React.FC<FooterProps> = (props) => {
  const { site } = props
  const sx = makeSx(props)

  const year = dayjs().year().toString()
  const copyright = site?.fields.copyright.replace('<year>', year)

  return (
    <AppBar position="static" component="footer" sx={sx.root}>
      <Container fixed sx={sx.container}>
        <Box sx={sx.logo}>
          <Button href="/#top">
            <Image
              src={site?.fields.logo.fields.file.url}
              alt={site?.fields.logo.fields.title}
              height="18px"
              fit="contain"
            />
          </Button>
        </Box>
        <Box sx={sx.mobileMenu}>
          <Button href="/#top">{copyright}</Button>
        </Box>
        <Box sx={sx.desktopMenu}>
          <Button href="/#top">{copyright}</Button>
          <Splitter flow="row" />
          <NavMenu navMenu={site?.fields.socialMenu} flow="row" showIcons />
        </Box>
      </Container>
    </AppBar>
  )
}

export { Footer }
