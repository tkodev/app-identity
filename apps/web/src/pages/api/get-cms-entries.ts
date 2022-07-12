import nextConnect from 'next-connect'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getCmsEntries } from '~/conductors/controllers'

const handler = nextConnect<NextApiRequest, NextApiResponse>().get(getCmsEntries())

export default handler
