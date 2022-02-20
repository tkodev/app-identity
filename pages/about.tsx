import { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from '@/components/atoms/link'
import { Layout } from '@/components/templates/page'

const About: NextPage = () => {
  return (
    <Layout title="About" desc="About">
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
    </Layout>
  )
}

export default About
