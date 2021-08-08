import { createClient } from 'contentful'
import { CONTENTFUL_SPACE, CONTENTFUL_TOKEN, CONTENTFUL_ENV, CONTENTFUL_SOURCE } from './env-var'

// vars
const CONTENTFUL_MAX_DEPTH = 10
const CONTENTFUL_ENTRIES_LIMIT = 1000

// config
const contentfulConfig = {
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_TOKEN,
  environment: CONTENTFUL_ENV,
  host: CONTENTFUL_SOURCE,
  removeUnresolved: true
}

// client
const contentfulClient = createClient(contentfulConfig)

// export
export { CONTENTFUL_MAX_DEPTH, CONTENTFUL_ENTRIES_LIMIT, contentfulClient }
