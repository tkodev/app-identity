import nextConnect from 'next-connect'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getEntries } from '@/conductors/controllers'

const handler = nextConnect<NextApiRequest, NextApiResponse>().get(getEntries())

export default handler
