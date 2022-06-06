import { useState, useEffect } from 'react'
import { useTheme, useMediaQuery } from '@mui/material'

const useModalState = (initialState: boolean = false) => {
  const [modalState, setModalState] = useState(initialState)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const handleModalState = (newModalState?: boolean) => () => {
    setModalState(() => (newModalState !== undefined ? newModalState : !modalState))
  }

  useEffect(() => {
    setModalState(false)
  }, [matches])

  return {
    modalState,
    setModalState,
    handleModalState
  }
}

export { useModalState }
