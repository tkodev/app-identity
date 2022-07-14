import React from 'react'
import { Entry } from 'contentful'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Grid, IconButton } from '@mui/material'
import { Image, NavSeparator } from '~/components/atoms'
import { HeaderBar, NavMenu, NavModal } from '~/components/molecules'
import { createSx, useModalState } from '~/conductors/hooks'
import { CmsSite } from '~/conductors/types'

type HeaderProps = {
  site?: Entry<CmsSite> | null
}

const makeSx = createSx<HeaderProps>((props, theme) => {
  return {
    gridContainer: {
      height: '100%'
    },
    gridLogo: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    gridMenu: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    mobile: {
      height: '100%',
      display: { xs: 'flex', md: 'none' }
    },
    desktop: {
      height: '100%',
      display: { xs: 'none', md: 'flex' }
    },
    navIcon: {
      margin: 1,
      width: 36,
      height: 36
    }
  }
})

const Header: React.FC<HeaderProps> = (props) => {
  const { site } = props
  const sx = makeSx(props)
  const { modalState, handleModalState } = useModalState()

  return (
    <>
      <HeaderBar>
        <Grid container sx={sx.gridContainer}>
          <Grid item xs={2} sx={sx.gridLogo}>
            <Button href="/#top">
              <Image src={site?.fields.logo.fields.file.url || ''} alt="Logo" height="18px" fit="contain" />
            </Button>
          </Grid>
          <Grid item xs={10} sx={sx.gridMenu}>
            <Box sx={sx.mobile}>
              <IconButton sx={sx.navIcon} onClick={handleModalState()} aria-label="Toggle Menu">
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            </Box>
            <Box sx={sx.desktop}>
              <NavMenu navMenu={site?.fields.headerMenu} flow="row" />
              <NavSeparator flow="row" />
              <NavMenu navMenu={site?.fields.socialMenu} flow="row" showIcons />
            </Box>
          </Grid>
        </Grid>
      </HeaderBar>
      <NavModal
        open={modalState}
        onClose={handleModalState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NavMenu navMenu={site?.fields.headerMenu} flow="column" />
        <NavSeparator flow="column" />
        <NavMenu navMenu={site?.fields.socialMenu} flow="row" showIcons />
      </NavModal>
    </>
  )
}

export { Header }
