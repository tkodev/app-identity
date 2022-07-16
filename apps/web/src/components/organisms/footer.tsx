import React from 'react'
import { Entry } from 'contentful'
import { AppBar, Box, Button } from '@mui/material'
import { Container, Image, Splitter } from '~/components/atoms'
import { Navs } from '~/components/molecules'
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

  return (
    <AppBar position="static" component="footer" sx={sx.root}>
      <Container fixed sx={sx.container}>
        <Box sx={sx.logo}>
          <Button href={site?.fields.logoNav.fields.path}>
            <Image
              src={site?.fields.logoNav.fields.file?.fields.file.url}
              alt={site?.fields.logoNav.fields.title}
              height="18px"
              fit="contain"
            />
          </Button>
        </Box>
        <Box sx={sx.mobileMenu}>
          <Navs navs={site?.fields.footerNavs} flow="row" />
        </Box>
        <Box sx={sx.desktopMenu}>
          <Navs navs={site?.fields.footerNavs} flow="row" />
          <Splitter flow="row" />
          <Navs navs={site?.fields.socialNavs} flow="row" showIcons />
        </Box>
      </Container>
    </AppBar>
  )
}

export { Footer }
