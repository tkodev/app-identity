import { NextApiRequest, NextApiResponse } from 'next'
import { logClient, cmsClient, keyObjBy, mapObjBy } from '@/conductors/utils'
import { CONTENTFUL_MAX_DEPTH, CONTENTFUL_ENTRIES_LIMIT, CONTENTFUL_LOCALE } from '@/conductors/utils/env'
import { snakeCase } from 'change-case'
import { CmsEntriesRequest, CmsEntriesResponse } from '@/conductors/queries'

const snakeKeys = ['contentType']

const getCmsEntries = () => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const params = mapObjBy(req.query ?? {}, (val) => String(val))
    const fullParams: CmsEntriesRequest = {
      locale: params.locale ?? CONTENTFUL_LOCALE,
      include: CONTENTFUL_MAX_DEPTH,
      limit: CONTENTFUL_ENTRIES_LIMIT,
      ...params
    }
    const snakeParams = keyObjBy(fullParams, (_, key) => {
      return snakeKeys.includes(key) ? snakeCase(key) : key
    })

    const response: CmsEntriesResponse = await cmsClient.getEntries(snakeParams)

    return res.json(response)
  } catch (err: any) {
    const code = err?.status || err?.sys?.id === 'NotFound' ? 404 : 500
    logClient.error('getEntries controller', { code, err })
    return res.status(code).json({ error: `Unable to getEntries: ${JSON.stringify(req.query)}` })
  }
}

export { getCmsEntries }
