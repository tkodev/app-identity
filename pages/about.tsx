import { NextPage } from 'next'
import { Box, Button, Typography, Container } from '@mui/material'
import { Link } from '@/components/atoms'
import { Page } from '@/components/templates'

const About: NextPage = () => {
  return (
    <Page title="About" desc="About">
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            MUI v5 + Next.js with TypeScript example
          </Typography>
          <Box maxWidth="sm">
            <Button variant="contained" component={Link} noLinkStyle href="/">
              Go to the Home page
            </Button>
          </Box>
        </Box>
      </Container>
    </Page>
  )
}

export default About
