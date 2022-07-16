import React from 'react'
import { Entry } from 'contentful'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppBar, Box, Button, Grid, IconButton } from '@mui/material'
import { Container, Image, Splitter } from '~/components/atoms'
import { NavMenu, NavModal } from '~/components/molecules'
import { createSx, useModalState } from '~/conductors/hooks'
import { CmsSite } from '~/conductors/types'

type HeaderProps = {
  site?: Entry<CmsSite> | null
}

const makeSx = createSx<HeaderProps>((props, theme) => {
  const { barHeight } = theme.options

  return {
    root: {
      gridArea: 'header',
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
      gap: 2,
      py: 2
    },
    logo: {
      gridArea: 'logo'
    },
    mobileMenu: {
      gridArea: 'menu',
      display: { xs: 'flex', md: 'none' }
    },
    desktopMenu: {
      gridArea: 'menu',
      display: { xs: 'none', md: 'flex' }
    },
    menuButton: {
      width: 36,
      height: 36,
      m: 1
    }
  }
})

const Header: React.FC<HeaderProps> = (props) => {
  const { site } = props
  const sx = makeSx(props)
  const { modalState, handleModalState } = useModalState()

  return (
    <AppBar position="fixed" component="header" sx={sx.root}>
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
          <IconButton sx={sx.menuButton} onClick={handleModalState()} aria-label="Toggle Menu">
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
        </Box>
        <Box sx={sx.desktopMenu}>
          <NavMenu navMenu={site?.fields.headerMenu} flow="row" />
          <Splitter flow="row" />
          <NavMenu navMenu={site?.fields.socialMenu} flow="row" showIcons />
        </Box>
      </Container>
      <NavModal
        open={modalState}
        onClose={handleModalState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NavMenu navMenu={site?.fields.headerMenu} flow="column" />
        <Splitter flow="column" />
        <NavMenu navMenu={site?.fields.socialMenu} flow="row" showIcons />
      </NavModal>
    </AppBar>
  )
}

export { Header }
