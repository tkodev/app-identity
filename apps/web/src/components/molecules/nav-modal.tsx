import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Fade, IconButton, Modal } from '@mui/material'
import { Container } from '~/components/atoms'
import { createSx } from '~/conductors/hooks'

type NavModalProps = {
  open: boolean
  onClose: () => void
}

const useSx = createSx<NavModalProps>((props, theme) => {
  return {
    root: {
      backgroundColor: 'rgba(18, 18, 18, 0.5)',
      backdropFilter: 'blur(10px)',
      padding: 2,
      height: '100vh'
    },
    container: {
      position: 'relative',
      height: '100%',
      paddingTop: 2,
      paddingBottom: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexFlow: 'column'
    },
    closeIcon: {
      position: 'absolute',
      top: theme.spacing(0.5),
      right: theme.spacing(4),
      width: 36,
      height: 36
    }
  }
})

const NavModal: React.FC<NavModalProps> = (props) => {
  const { open, onClose, children } = props
  const sx = useSx(props)

  return (
    <Modal open={open} onClose={onClose}>
      <Fade in={open}>
        <Box sx={sx.root}>
          <Container fixed sx={sx.container}>
            <IconButton sx={sx.closeIcon} onClick={onClose} aria-label="Close Menu">
              <FontAwesomeIcon icon={faTimes} />
            </IconButton>
            {children}
          </Container>
        </Box>
      </Fade>
    </Modal>
  )
}

export { NavModal }
