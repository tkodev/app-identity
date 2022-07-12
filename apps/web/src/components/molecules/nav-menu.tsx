import React from 'react'
import { Entry } from 'contentful'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, IconButton } from '@mui/material'
import { createSx } from '~/conductors/hooks'
import { CmsNavMenu } from '~/conductors/types'

type NavMenuProps = {
  navMenu?: Entry<CmsNavMenu> | null
  flow: 'row' | 'column'
  showIcons?: boolean
}

const useSx = createSx<NavMenuProps>((props) => {
  const { flow } = props

  return {
    root: {
      display: 'flex',
      flexFlow: flow === 'row' ? 'row' : 'column'
    },
    navItem: {
      margin: 0.5,
      textTransform: 'uppercase',
      color: 'white'
    },
    navIcon: {
      margin: 0.5,
      width: 36,
      height: 36
    }
  }
})

const NavMenu: React.VFC<NavMenuProps> = (props) => {
  const { navMenu, showIcons = false } = props
  const sx = useSx(props)

  return (
    <Box sx={sx.root} component="nav">
      {navMenu?.fields.navs.map((nav) => {
        const { alias, title, icon } = nav.fields
        return showIcons ? (
          <IconButton sx={sx.navIcon} key={alias} aria-label={title}>
            <FontAwesomeIcon icon={['fab', icon]} />
          </IconButton>
        ) : (
          <Button sx={sx.navItem} key={alias}>
            {title}
          </Button>
        )
      })}
    </Box>
  )
}

export { NavMenu }
