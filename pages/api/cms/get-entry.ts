import nextConnect from 'next-connect'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getEntry } from '@/conductors/controllers'

const handler = nextConnect<NextApiRequest, NextApiResponse>().get(getEntry())

export default handler
