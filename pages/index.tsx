import { NextPage } from 'next'
import { Box, Button, Typography, Container } from '@mui/material'
import { Link } from '@/components/atoms'
import { Page } from '@/components/templates'
import { CmsPage } from '@/types'
import { axiosClient } from '@/utils'
import { Entry } from 'contentful'

type HomePageProps = {
  page: CmsPage | null
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
    content_type: 'page',
    'fields.uid': 'pageHome'
  }

  const pageEntry = await axiosClient
    .get<Entry<CmsPage>>('/cms/get-entry', { params })
    .then(({ data }) => data)
    .catch((err) => {})

  const page = pageEntry?.fields ?? null
  const props: HomePageProps = { page }

  return { props }
}

export { getServerSideProps }
export default HomePage
