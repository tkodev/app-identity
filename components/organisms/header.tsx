import React from 'react'
import { Box, Grid, Button, IconButton } from '@mui/material'
import { Image } from '@/components/atoms'
import { HeaderItems, HeaderModal, HeaderBar } from '@/components/molecules'
import { createSx, useModalState } from '@/conductors/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Entry } from 'contentful'
import { CmsNavMenu } from '@/conductors/types'

type HeaderProps = {
  headerMenu?: Entry<CmsNavMenu>
  socialMenu?: Entry<CmsNavMenu>
}

const useSx = createSx<HeaderProps>((props, theme) => {
  return {
    grid: {
      height: '100%'
    },
    logo: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    mobile: {
      height: '100%',
      display: { xs: 'flex', md: 'none' },
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    desktop: {
      height: '100%',
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    icon: {
      margin: 1,
      width: 36,
      height: 36
    }
  }
})

const Header: React.FC<HeaderProps> = (props) => {
  const { headerMenu, socialMenu } = props
  const sx = useSx(props)
  const { modalState, handleModalState } = useModalState()

  return (
    <>
      <HeaderBar>
        <Grid container sx={sx.grid}>
          <Grid item xs={2} md={2} sx={sx.logo}>
            <Button>
              <Image src="/images/logo-dark-crop@2x.png" alt="Logo" height="18px" fit="contain" />
            </Button>
          </Grid>
          <Grid item xs={10} md={10} sx={sx.mobile}>
            <Box sx={sx.sep}>|</Box>
            <IconButton sx={sx.icon} onClick={handleModalState()} aria-label="Toggle Menu">
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Grid>
          <Grid item xs={10} md={10} sx={sx.desktop}>
            <HeaderItems headerMenu={headerMenu} socialMenu={socialMenu} />
          </Grid>
        </Grid>
      </HeaderBar>
      <HeaderModal
        open={modalState}
        onClose={handleModalState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <HeaderItems headerMenu={headerMenu} socialMenu={socialMenu} flow="column" />
      </HeaderModal>
    </>
  )
}

export { Header }
