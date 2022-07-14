import React from 'react'
import { Entry } from 'contentful'
import dayjs from 'dayjs'
import { Button, Grid } from '@mui/material'
import { Image, NavSeparator } from '~/components/atoms'
import { FooterBar, NavMenu } from '~/components/molecules'
import { createSx } from '~/conductors/hooks'
import { CmsSite } from '~/conductors/types'

type FooterProps = {
  site?: Entry<CmsSite> | null
}

const makeSx = createSx<FooterProps>((props, theme) => {
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
    }
  }
})

const Footer: React.FC<FooterProps> = (props) => {
  const { site } = props
  const sx = makeSx(props)

  const year = dayjs().year().toString()
  const copyright = site?.fields.copyright.replace('<year>', year)

  return (
    <>
      <FooterBar>
        <Grid container sx={sx.gridContainer}>
          <Grid item xs={2} sx={sx.gridLogo}>
            <Button href="/#top">
              <Image
                src={site?.fields.logo.fields.file.url || ''}
                alt={site?.fields.logo.fields.title || ''}
                height="18px"
                fit="contain"
              />
            </Button>
          </Grid>
          <Grid item xs={10} sx={sx.gridMenu}>
            <Button href="/#top">{copyright}</Button>
            <NavSeparator flow="row" />
            <NavMenu navMenu={site?.fields.socialMenu} flow="row" showIcons />
          </Grid>
        </Grid>
      </FooterBar>
    </>
  )
}

export { Footer }
