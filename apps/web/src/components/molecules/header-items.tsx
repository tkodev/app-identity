import React from 'react'
import { createSx } from '~/conductors/hooks'
import { Box, Button, IconButton } from '@mui/material'
import { Entry } from 'contentful'
import { CmsSite } from '~/conductors/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type HeaderItemsProps = {
  site?: Entry<CmsSite> | null
  flow?: 'row' | 'column'
}

const useSx = createSx<HeaderItemsProps>((props) => {
  const { flow = 'row' } = props

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexFlow: flow === 'row' ? 'row' : 'column'
    },
    nav: {
      margin: 0.5,
      textTransform: 'uppercase',
      color: 'white'
    },
    sep: {
      margin: 1,
      transform: flow === 'row' ? 'none' : 'rotate(90deg)'
    },
    icon: {
      margin: 0.5,
      width: 36,
      height: 36
    }
  }
})

const HeaderItems: React.VFC<HeaderItemsProps> = (props) => {
  const { site } = props
  const { headerMenu, socialMenu } = site?.fields ?? {}
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      {headerMenu?.fields.navs.map((nav) => {
        const { alias, title } = nav.fields
        return (
          <Button key={alias} sx={sx.nav}>
            {title}
          </Button>
        )
      })}
      <Box sx={sx.sep}>|</Box>
      <Box>
        {socialMenu?.fields.navs.map((nav) => {
          const { alias, title, icon } = nav.fields
          return (
            <IconButton key={alias} sx={sx.icon} aria-label={title}>
              <FontAwesomeIcon icon={['fab', icon]} />
            </IconButton>
          )
        })}
      </Box>
    </Box>
  )
}

export { HeaderItems }
