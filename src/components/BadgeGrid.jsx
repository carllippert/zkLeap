import Image from 'next/image'
import crystal from '../images/badges/crystal_ball_badge.svg'
import lock from '../images/badges/lock_badge.svg'
import yoda from '../images/badges/yoda_badge.svg'
import refi from '../images/badges/refi_badge.svg'
import whale from '../images/badges/whale_badge.svg'

const people = [
  {
    name: 'On Chain Wizard',
    title: 'Deployed Subgraphs Before 2020',
    imageUrl: crystal,
    comingSoon: true,
  },
  {
    name: 'OG',
    title: 'Top 1000 txn volume 2013 - 2020',
    imageUrl: yoda,
    comingSoon: true,
  },
  {
    name: 'Regeneratoor',
    title: 'Early on POS Chains',
    imageUrl: refi,
    comingSoon: true,
  },
  {
    name: 'Whale',
    title: 'Top 1000 LP provider 2020',
    imageUrl: whale,
    comingSoon: true,
  },
  {
    name: 'SAFU',
    title: 'Protector of User Funds',
    imageUrl: lock,
    comingSoon: true,
  },
]

export default function BadgeGrid() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <Image
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {person.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Coming Soon
                </span>
              </dd>
            </dl>
          </div>
          {/* <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div> */}
        </li>
      ))}
    </ul>
  )
}
