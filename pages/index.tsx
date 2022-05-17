import { NextPage } from 'next'
import { Box, Button, Typography, Container } from '@mui/material'
import { Link } from '@/components/atoms'
import { Page } from '@/components/templates'
import { CmsPage } from '@/conductors/types'
import { Entry } from 'contentful'
import { getCmsEntries } from '@/conductors/queries'

type HomePageProps = {
  page: Entry<CmsPage> | null
}

const HomePage: NextPage<HomePageProps> = (props) => {
  const { page } = props

  return (
    <Page page={page}>
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
            <Button variant="contained" component={Link} noLinkStyle href="/about">
              Go to the About page
            </Button>
          </Box>
        </Box>
      </Container>
    </Page>
  )
}

const getServerSideProps = async () => {
  const params = {
    contentType: 'page',
    'fields.uid': 'pageHome'
  }

  const pages = await getCmsEntries<CmsPage>(params)
  const page = pages.items[0]

  const props: HomePageProps = { page }

  return { props }
}

export { getServerSideProps }
export default HomePage
