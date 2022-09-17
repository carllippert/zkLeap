import React, { useEffect, useState } from 'react'
import JobItem from './JobItem'

export default function Jobs() {
  const [jobs, setJobs] = useState([])

  const getJobs = async () => {
    try {
      let response = await fetch('/api/getjobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
      setJobs(response)
    } catch (e) {
      console.log('error' + JSON.stringify(e))
    }
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <div className="mx-auto mt-20 mb-20 min-h-full max-w-5xl overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {jobs.map((item, index) => {
          return <JobItem job={item} key={index} />
        })}
      </ul>
    </div>
  )
}
