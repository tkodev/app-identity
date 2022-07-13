import { NextApiRequest, NextApiResponse } from 'next'
import { dotCase, snakeCase } from 'change-case'
import { CmsEntriesRequest, CmsEntriesResponse } from '~/conductors/queries'
import { cmsClient, keyObjBy, logClient, mapObjBy } from '~/conductors/utils'
import { CONTENTFUL_ENTRIES_LIMIT, CONTENTFUL_HOST, CONTENTFUL_LOCALE, CONTENTFUL_MAX_DEPTH } from '~/conductors/utils/env'

const dotCasePrefixes = ['fields.']

const getCmsEntries = () => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const params = mapObjBy(req.query ?? {}, (val) => String(val))
    const fullParams: CmsEntriesRequest = {
      locale: params.locale ?? CONTENTFUL_LOCALE,
      include: CONTENTFUL_MAX_DEPTH,
      limit: CONTENTFUL_ENTRIES_LIMIT,
      ...params
    }
    const casedParams = keyObjBy(fullParams, (_, key) => {
      const dotCasedKey = dotCase(key)
      const shouldUseDotCase = dotCasePrefixes.some((prefix) => dotCasedKey.startsWith(prefix))
      return shouldUseDotCase ? dotCase(key) : snakeCase(key)
    })

    const response: CmsEntriesResponse = await cmsClient.getEntries(casedParams)

    return res.json(response)
  } catch (err: any) {
    const code = err?.status || err?.sys?.id === 'NotFound' ? 404 : 500
    logClient.error('getEntries controller', { code, err })
    return res.status(code).json({ error: `Unable to getEntries: ${JSON.stringify(req.query)}` })
  }
}

export { getCmsEntries }
