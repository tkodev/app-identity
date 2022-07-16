import React from 'react'
import { Entry } from 'contentful'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, IconButton } from '@mui/material'
import { createSx } from '~/conductors/hooks'
import { CmsNav } from '~/conductors/types'
import { replaceCurrentYear } from '~/conductors/utils/helpers'

type NavsProps = {
  navs?: Entry<CmsNav>[] | null
  flow: 'row' | 'column'
  showIcons?: boolean
}

const makeSx = createSx<NavsProps>((props, theme) => {
  const { flow } = props

  return {
    root: {
      display: 'flex',
      alignItems: flow === 'row' ? 'center' : 'normal',
      flexFlow: flow === 'row' ? 'row' : 'column'
    },
    navItem: {
      m: 0.25
    },
    navIcon: {
      width: 32,
      height: 32,
      fontSize: theme.typography.button.fontSize,
      m: 0.25
    }
  }
})

const Navs: React.VFC<NavsProps> = (props) => {
  const { navs, showIcons = false } = props
  const sx = makeSx(props)

  return (
    <Box sx={sx.root} component="nav">
      {navs?.map((nav) => {
        const { alias, title, iconType, icon, path, file } = nav.fields
        const renderIcon = showIcons && !!iconType && !!icon
        const href = file?.fields.file.url || path || ''

        return renderIcon ? (
          <IconButton sx={sx.navIcon} href={href} key={alias} aria-label={title}>
            <FontAwesomeIcon icon={[iconType, icon]} />
          </IconButton>
        ) : (
          <Button sx={sx.navItem} href={href} key={alias}>
            {replaceCurrentYear(title)}
          </Button>
        )
      })}
    </Box>
  )
}

export { Navs }
