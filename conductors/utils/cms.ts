import { createClient } from 'contentful'

import { CONTENTFUL_HOST, CONTENTFUL_SPACE, CONTENTFUL_ENV, CONTENTFUL_TOKEN } from '@/conductors/utils/env'

const cmsConfig = {
  host: CONTENTFUL_HOST,
  space: CONTENTFUL_SPACE,
  environment: CONTENTFUL_ENV,
  accessToken: CONTENTFUL_TOKEN,
  removeUnresolved: true
}

const cmsClient = createClient(cmsConfig)

export { cmsClient, cmsConfig }
