import { NextApiRequest, NextApiResponse } from 'next'

var Airtable = require('airtable')
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
})
var base = Airtable.base('appEVBLGbrP8AwFZJ')

type Data = {
  name: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) => {
  const { tokenId, recordId } = req.query
  console.log({ tokenId })
  console.log({ recordId })
  try {
    const updatedJobs = await base('Jobs').update(recordId, {
      tokenId,
      claimed: true,
    })
    res.status(200).json(updatedJobs)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Unable to update job' })
  }
}
