import Image from 'next/image'
import crystal from '../images/badges/crystal_ball_badge.svg'
import lock from '../images/badges/lock_badge.svg'
import yoda from '../images/badges/yoda_badge.svg'
import refi from '../images/badges/refi_badge.svg'
import whale from '../images/badges/whale_badge.svg'
import { useEffect, useState } from 'react'
import { abi } from '../../sismo/sismo_abi'
import { useContractRead, useAccount } from 'wagmi'
import { Button } from './Button'
import Link from 'next/link'

const init_badges = [
  {
    name: 'Yoda',
    title: 'Your a complete OG buildoor',
    imageUrl: yoda,
    comingSoon: false,
    claimed: false,
  },
  {
    name: 'Psychic',
    title: 'Early User of > 5 EVM chains',
    imageUrl: crystal,
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
  const [badges, setBadges] = useState(init_badges)
  const { address } = useAccount()
  const [minted, setMinted] = useState(false)

  const badge_id = '10000005'

  //sismo contract polygon
  const { data, isError, isLoading } = useContractRead({
    addressOrName: '0xeF5b2Be9a6075a61bCA4384abc375485d5e196c3',
    contractInterface: abi,
    functionName: 'balanceOf',
    args: [address, badge_id],
  })

  const fetchBadgeBalance = async () => {
    try {
      //fetch sismo
    } catch (e) {
      console.log(e)
      throw Error(e)
    }
  }

  useEffect(() => {
    // fetchBadgeBalance()
    console.log('Data ?=> ')
    console.log(data)
    let new_grid = [...badges]

    new_grid[0].claimed = true

    setBadges(new_grid)
  }, [data])

  return (
    <ul
      role="list"
      className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {badges.map((badge) => (
        <li
          key={badge.name}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <Image
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={badge.imageUrl}
              alt=""
            />
            <h3 className="text-sms mt-6 font-medium text-gray-900">
              {badge.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{badge.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                {badge.comingSoon ? (
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    Coming Soon
                  </span>
                ) : (
                  <div>
                    {badge.claimed && minted ? (
                      <Button className="bg-indigo-700">Proved!</Button>
                    ) : (
                      <Link href="http://localhost:3000/yoda" target="_blank">
                        <Button onClick={() => setMinted(true)}>
                          Mint zkBadge
                        </Button>
                      </Link>
                    )}
                  </div>
                )}
                ``
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
