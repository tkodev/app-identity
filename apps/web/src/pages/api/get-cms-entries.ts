import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { getCmsEntries } from '~/conductors/controllers'

const handler = nextConnect<NextApiRequest, NextApiResponse>().get(getCmsEntries())

export default handler
