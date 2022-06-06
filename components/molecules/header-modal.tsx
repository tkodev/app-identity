import React from 'react'
import { createSx } from '@/conductors/hooks'
import { Box, Container, IconButton, Modal, Fade } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

type HeaderModalProps = {
  open: boolean
  onClose: () => void
}

const useSx = createSx<HeaderModalProps>((props, theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.default,
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
      justifyContent: 'center'
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

const HeaderModal: React.FC<HeaderModalProps> = (props) => {
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

export { HeaderModal }
