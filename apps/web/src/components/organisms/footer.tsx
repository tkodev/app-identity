import React from 'react'
import { createSx } from '~/conductors/hooks'
import { Entry } from 'contentful'
import { CmsNavMenu, CmsSite } from '~/conductors/types'
import { FooterBar, DisplayIf } from '~/components/molecules'
import { Box, Grid, Button, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from '~/components/atoms'
import { HeaderItems } from '~/components/molecules'

type FooterProps = {
  site?: Entry<CmsSite> | null
  footerMenu?: Entry<CmsNavMenu>
  socialMenu?: Entry<CmsNavMenu>
}

const useSx = createSx<FooterProps>(() => {
  return {
    //
  }
})

const Footer: React.FC<FooterProps> = (props) => {
  const { site } = props
  const { footerMenu, socialMenu } = site?.fields ?? {}
  const sx = useSx(props)

  return (
    <FooterBar>
      <Grid container sx={sx.grid}>
        <Grid item xs={2} md={2} sx={sx.logo}>
          <Button>
            <Image src="/images/logo-dark-crop@2x.png" alt="Logo" height="18px" fit="contain" />
          </Button>
        </Grid>
        <Grid item xs={10} sx={sx.grid}>
          <Box sx={sx.mobile}>
            <IconButton sx={sx.icon} onClick={handleModalState()} aria-label="Toggle Menu">
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Box>
          <Box sx={sx.desktop}>
            {socialMenu?.fields.navs.map((nav) => {
              const { alias, title, icon } = nav.fields
              return (
                <IconButton key={alias} sx={sx.icon} aria-label={title}>
                  <FontAwesomeIcon icon={['fab', icon]} />
                </IconButton>
              )
            })}
          </Box>
        </Grid>
      </Grid>
    </FooterBar>
  )
}

export { Footer }
