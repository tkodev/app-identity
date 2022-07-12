import { NextPage } from 'next'
import { Box, Button, Typography } from '@mui/material'
import { Container } from '~/components/atoms'
import { Link } from '~/components/atoms'
import { Page } from '~/components/templates'
import { ssrCmsEntries, useCmsEntries } from '~/conductors/queries'
import { CmsPage, CmsSite } from '~/conductors/types'
import { ssrQueryClient } from '~/conductors/utils/query'

const siteParams = {
  contentType: 'site',
  fieldsAlias: 'site-tkodev'
}
const pageParams = {
  contentType: 'page',
  fieldsAlias: 'page-home'
}

const HomePage: NextPage = () => {
  // fetches
  const { data: sites } = useCmsEntries<CmsSite>(siteParams)
  const { data: pages } = useCmsEntries<CmsPage>(pageParams)
  const site = sites?.items[0]
  const page = pages?.items[0]

  return (
    <Page site={site} page={page}>
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
