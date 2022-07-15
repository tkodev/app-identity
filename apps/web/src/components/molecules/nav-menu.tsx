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

const makeSx = createSx<NavMenuProps>((props, theme) => {
  const { flow } = props

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexFlow: flow === 'row' ? 'row' : 'column'
    },
    navItem: {
      m: 0.25
    },
    navIcon: {
      fontSize: theme.typography.button.fontSize,
      margin: 0.25,
      width: 32,
      height: 32
    }
  }
})

const NavMenu: React.VFC<NavMenuProps> = (props) => {
  const { navMenu, showIcons = false } = props
  const sx = makeSx(props)

  return (
    <Box sx={sx.root} component="nav">
      {navMenu?.fields.navs.map((nav) => {
        const { alias, title, iconType, icon, path, file } = nav.fields
        const renderIcon = showIcons && !!iconType && !!icon
        const href = file?.fields.file.url || path || ''

        return renderIcon ? (
          <IconButton sx={sx.navIcon} href={href} key={alias} aria-label={title}>
            <FontAwesomeIcon icon={[iconType, icon]} />
          </IconButton>
        ) : (
          <Button sx={sx.navItem} href={href} key={alias}>
            {title}
          </Button>
        )
      })}
    </Box>
  )
}

export { NavMenu }
