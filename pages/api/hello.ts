import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use()
  .get(async (req, res) => {
    res.status(200).json({ name: 'John Doe' })
  })

export default handler
