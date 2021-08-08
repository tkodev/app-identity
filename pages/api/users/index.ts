import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { sampleUserData } from '@/shared/constants/sample-data'

// handler
const UsersApi = nextConnect<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    try {
      if (!Array.isArray(sampleUserData)) {
        throw new Error('Cannot find user data')
      }

      res.status(200).json(sampleUserData)
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  })

// export
export default UsersApi
