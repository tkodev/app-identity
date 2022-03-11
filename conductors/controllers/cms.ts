import { NextApiRequest, NextApiResponse } from 'next'
import { getEntries as getEntriesService } from '@/conductors/services'
import { logClient } from '@/shared/configs'
import { CONTENTFUL_MAX_DEPTH, CONTENTFUL_ENTRIES_LIMIT } from '@/shared/constants'

const getEntry = () => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { ...params } = req.query ?? {}

    const fullParams = {
      include: CONTENTFUL_MAX_DEPTH,
      limit: 1,
      ...params
    }

    const response = await getEntriesService<any>({
      params: fullParams
    }).then(({ items }) => items?.[0])

    return res.json(response)
  } catch (err: any) {
    const code = err?.status || err?.sys?.id === 'NotFound' ? 404 : 500
    logClient.error('getEntry controller', { code, err })
    return res.status(code).json({ error: `Unable to getEntries: ${JSON.stringify(req.query)}` })
  }
}

const getEntries = () => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const params = req.query ?? {}

    const fullParams = {
      include: CONTENTFUL_MAX_DEPTH,
      limit: CONTENTFUL_ENTRIES_LIMIT,
      ...params
    }

    const response = await getEntriesService<any>({
      params: fullParams
    })

    return res.json(response)
  } catch (err: any) {
    const code = err?.status || err?.sys?.id === 'NotFound' ? 404 : 500
    logClient.error('getEntries controller', { code, err })
    return res.status(code).json({ error: `Unable to getEntries: ${JSON.stringify(req.query)}` })
  }
}

export { getEntry, getEntries }
