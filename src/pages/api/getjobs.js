var Airtable = require('airtable')
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
})
var base = Airtable.base('appEVBLGbrP8AwFZJ')

const getJobs = async (req, res) => {
  const data = req.body
  // console.log('Data => ' + JSON.stringify(data))

  // console.log({ tokenId })
  // console.log({ recordId })
  try {
    // const jb = await base('Jobs').update(recordId, {
    //   tokenId,
    //   claimed: true,
    // })

    let comps = {}

    let cos = await base('Companies')
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 50,
        view: 'Grid view',
      })
      .eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record, index) {
          // console.log('Retrieved', record.id)
          comps[record.id] = record
          // console.log('Co -> ' + JSON.stringify(record))
        })

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage()
      })

    let our_jerbs = []

    let jerbs = await base('Jobs')
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 50,
        view: 'Grid view',
      })
      .eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record, index) {
          // console.log('Retrieved', record.get('Job Posting'))
          let rec_for_co = record.get('Company')
          let co_blob = comps[rec_for_co]

          // console.log('co_blob => ' + JSON.stringify(co_blob))
          our_jerbs.push({
            ...record,
            fake_id: index,
            company: co_blob,
          })
        })

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage()
      })

    res.status(200).json(our_jerbs)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Unable to fetch jobs' })
  }
}

export default getJobs
