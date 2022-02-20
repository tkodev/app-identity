import React from 'react'
import { Box, Container, Grid, Button } from '@mui/material'
import { Image } from '@/components/atoms'
import { Sx } from '@/shared/types'

type HeaderProps = {}

const useSx = (props: HeaderProps): Sx => ({
  root: {
    gridRow: 1,
    padding: 1
  },
  column: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 48
  }
})

const Header: React.FC = (props) => {
  const sx = useSx(props)

  return (
    <Box component="header" sx={sx.root}>
      <Container fixed>
        <Grid container spacing={1}>
          <Grid item xs={1} sx={sx.column}>
            <Button>
              <Image src="/images/6.0.3/logo-dark-crop@1x.png" alt="Logo" height="36px" fit="contain" />
            </Button>
          </Grid>
          <Grid item xs={10} />
          <Grid item xs={1} sx={sx.column}>
            tests
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export { Header }
