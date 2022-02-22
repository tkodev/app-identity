import React from 'react'
import { Box, Container, Grid, Button, IconButton } from '@mui/material'
import { Image } from '@/components/atoms'
import { Sx } from '@/shared/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { headerHeight } from '@/shared/constants'

type HeaderProps = {}

const useSx = (props: HeaderProps): Sx => ({
  root: {
    position: 'fixed',
    width: '100%',
    minHeight: headerHeight,
    backdropFilter: 'blur(10px)',
    gridRow: 1,
    paddingTop: 2,
    paddingBottom: 2
  },
  logo: {
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  mobile: {
    height: '100%',
    display: { xs: 'flex', sm: 'none' },
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  desktop: {
    height: '100%',
    display: { xs: 'none', sm: 'flex' },
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  nav: {
    marginLeft: 1,
    textTransform: 'uppercase',
    color: 'white'
  },
  sep: {
    marginRight: 2,
    marginLeft: 2,
    marginTop: '-2px'
  },
  icon: {
    textTransform: 'uppercase'
  }
})

const Header: React.FC = (props) => {
  const sx = useSx(props)

  return (
    <Box component="header" sx={sx.root}>
      <Container fixed>
        <Grid container spacing={1}>
          <Grid item xs={2} md={1} sx={sx.logo}>
            <Button>
              <Image src="/images/logo-dark-crop@2x.png" alt="Logo" height="24px" fit="contain" />
            </Button>
          </Grid>
          <Grid item xs={10} md={11} sx={sx.mobile}>
            <Box sx={sx.sep}>|</Box>
            <IconButton sx={sx.icon} aria-label="Menu">
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Grid>
          <Grid item xs={10} md={11} sx={sx.desktop}>
            <Button sx={sx.nav}>01 - Works</Button>
            <Button sx={sx.nav}>02 - Blog</Button>
            <Button sx={sx.nav}>03 - About</Button>
            <Box sx={sx.sep}>|</Box>
            <IconButton sx={sx.icon} aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
            <IconButton sx={sx.icon} aria-label="Github">
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export { Header }
