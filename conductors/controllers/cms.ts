import { NextApiRequest, NextApiResponse } from 'next'
import { getEntry as getEntryService, getEntries as getEntriesService } from '@/conductors/services'
import { logClient } from '@/shared/configs'

const getEntry = () => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { rawEntryId, ...params } = req.query ?? {}
    const entryId = String(rawEntryId ?? '')

    const allParams = {
      ...params
    }

    const response = await getEntryService<any>({
      params: allParams,
      entryId
    })

    return res.json(response)
  } catch (err) {
    logClient.error('getEntries controller', err)
    return res.status(500).json({ error: `Unable to getEntries: ${JSON.stringify(req.query)}` })
  }
}

const getEntries = () => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const params = req.query ?? {}

    const allParams = {
      ...params
    }

    const response = await getEntriesService<any>({
      params: allParams
    })

    return res.json(response)
  } catch (err) {
    logClient.error('getEntries controller', err)
    return res.status(500).json({ error: `Unable to getEntries: ${JSON.stringify(req.query)}` })
  }
}

export { getEntry, getEntries }
