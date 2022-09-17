import React, { useEffect, useState } from 'react'

export default function JobItem({ job }) {
  return (
    <li
      key={job.id}
      className="flex px-4 py-4  font-semibold text-gray-900 sm:px-6"
    >
      <div className="flex-1">
        {job.fields['Job Posting']}
        <div className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
          {job.company.fields['company']}
        </div>
      </div>
      <div className="m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </li>
  )
}
