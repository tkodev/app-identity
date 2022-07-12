import React from 'react'
import { useTheme, useMediaQuery, Box, Grid, Button, IconButton } from '@mui/material'
import { Image } from '~/components/atoms'
import { HeaderItems, HeaderModal, HeaderBar } from '~/components/molecules'
import { createSx, useModalState } from '~/conductors/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Entry } from 'contentful'
import { CmsSite } from '~/conductors/types'

type HeaderProps = {
  site?: Entry<CmsSite> | null
}

const useSx = createSx<HeaderProps>((props, theme) => {
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
    icon: {
      margin: 1,
      width: 36,
      height: 36
    }
  }
})

const Header: React.FC<HeaderProps> = (props) => {
  const { site } = props
  const sx = useSx(props)
  const theme = useTheme()
  const { modalState, handleModalState } = useModalState()

  return (
    <>
      <HeaderBar>
        <Grid container sx={sx.gridContainer}>
          <Grid item xs={2} sx={sx.gridLogo}>
            <Button>
              <Image src="/images/logo-dark-crop@2x.png" alt="Logo" height="18px" fit="contain" />
            </Button>
          </Grid>
          <Grid item xs={10} sx={sx.gridMenu}>
            <Box sx={sx.mobile}>
              <IconButton sx={sx.icon} onClick={handleModalState()} aria-label="Toggle Menu">
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            </Box>
            <Box sx={sx.desktop}>
              <HeaderItems site={site} />
            </Box>
          </Grid>
        </Grid>
      </HeaderBar>
      <HeaderModal
        open={modalState}
        onClose={handleModalState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <HeaderItems site={site} flow="column" />
      </HeaderModal>
    </>
  )
}

export { Header }
