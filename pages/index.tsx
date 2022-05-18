import { NextPage } from 'next'
import { Box, Button, Typography, Container } from '@mui/material'
import { Link } from '@/components/atoms'
import { Page } from '@/components/templates'
import { CmsPage, CmsSite } from '@/conductors/types'
import { useCmsEntries, ssrCmsEntries } from '@/conductors/queries'
import { ssrQueryClient } from '@/conductors/utils/query'

const pageParams = {
  contentType: 'page',
  'fields.alias': 'page-home'
}
const siteParams = {
  contentType: 'site',
  'fields.alias': 'site-tkodev'
}

const HomePage: NextPage = () => {
  const { data: pages } = useCmsEntries<CmsPage>(pageParams)
  const { data: sites } = useCmsEntries<CmsSite>(siteParams)
  const page = pages?.items[0]
  const site = sites?.items[0]

  return (
    <Page page={page} site={site}>
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
  const dehydratedState = await ssrQueryClient(async (queryClient) => {
    await ssrCmsEntries<CmsSite>(siteParams, queryClient)
    await ssrCmsEntries<CmsPage>(pageParams, queryClient)
  })

  return {
    props: {
      dehydratedState
    }
  }
}

export { getServerSideProps }
export default HomePage
