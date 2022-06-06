import React from 'react'
import { Box, Container, Grid, Button, IconButton } from '@mui/material'
import { Image } from '@/components/atoms'
import { createSx } from '@/conductors/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Entry } from 'contentful'
import { CmsNavMenu } from '@/conductors/types'

type HeaderProps = {
  headerMenu?: Entry<CmsNavMenu>
  socialMenu?: Entry<CmsNavMenu>
}

const useSx = createSx<HeaderProps>((props, theme) => {
  const { headerHeight } = theme.options
  return {
    root: {
      position: 'fixed',
      width: '100%',
      height: headerHeight,
      backdropFilter: 'blur(10px)',
      gridRow: 1
    },
    container: {
      height: '100%',
      paddingTop: 2,
      paddingBottom: 2
    },
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
      width: 36,
      height: 36,
      textTransform: 'uppercase'
    }
  }
})

const Header: React.FC<HeaderProps> = (props) => {
  const { headerMenu, socialMenu } = props
  const sx = useSx(props)

  console.log({ headerMenu, socialMenu })

  return (
    <Box component="header" sx={sx.root}>
      <Container fixed sx={sx.container}>
        <Grid container sx={sx.grid}>
          <Grid item xs={2} md={2} sx={sx.logo}>
            <Button>
              <Image src="/images/logo-dark-crop@2x.png" alt="Logo" height="18px" fit="contain" />
            </Button>
          </Grid>
          <Grid item xs={10} md={10} sx={sx.mobile}>
            <Box sx={sx.sep}>|</Box>
            <IconButton sx={sx.icon} aria-label="Menu">
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Grid>
          <Grid item xs={10} md={10} sx={sx.desktop}>
            {headerMenu?.fields.navs.map((nav) => {
              const { alias, title } = nav.fields
              return (
                <Button key={alias} sx={sx.nav}>
                  {title}
                </Button>
              )
            })}
            <Box sx={sx.sep}>|</Box>
            {socialMenu?.fields.navs.map((nav) => {
              const { alias, title, icon } = nav.fields
              return (
                <IconButton key={alias} sx={sx.icon} aria-label={title}>
                  <FontAwesomeIcon icon={['fab', icon]} />
                </IconButton>
              )
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export { Header }
