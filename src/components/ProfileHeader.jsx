import anon from '../images/anon.png'
import Image from 'next/image'
import Link from 'next/link'
import { useAccount } from 'wagmi'

export default function ProfileHeader() {
  const { address } = useAccount()

  return (
    <div className="container mx-auto mb-10 mt-10 flex shadow-md sm:px-6 lg:px-8">
      <div className="flex-1">
        <Image
          height="150"
          width="150"
          src={anon}
          alt="fakepfp"
          className="mask mask-hexagon-2"
        />
      </div>
      <div className="m1-5 mt-5 flex-1 font-bold text-black">
        <div className="text-xl">
          Name:{' '}
          <span
            style={{
              marginLeft: '5px',
              marginRight: '5px',
              backgroundColor: 'Gainsboro',
              color: 'Gainsboro',
              borderRadius: '0.5rem',
            }}
            className="text-xl"
          >
            Carl Chissu Kofi
          </span>
        </div>
        <div>
          Age:{' '}
          <span
            style={{
              marginLeft: '5px',
              marginRight: '5px',
              backgroundColor: 'Gainsboro',
              color: 'Gainsboro',
              borderRadius: '0.5rem',
            }}
          >
            42 34 29 19
          </span>
        </div>
        <div>
          Sex:{' '}
          <span
            style={{
              marginLeft: '5px',
              marginRight: '5px',
              backgroundColor: 'Gainsboro',
              color: 'Gainsboro',
              borderRadius: '0.5rem',
            }}
          >
            Them They Me
          </span>
        </div>
        <div>
          Race:{' '}
          <span
            style={{
              marginLeft: '5px',
              marginRight: '5px',
              backgroundColor: 'Gainsboro',
              color: 'Gainsboro',
              borderRadius: '0.5rem',
            }}
          >
            All All All All
          </span>
        </div>
      </div>
      <div className="m1-5 align-right mt-10 flex-1 text-lg text-indigo-500 underline">
        <div>
          {address ? (
            <Link href={`https://polygonscan.com/address/${address}`}>
              <a target="_blank">View on Polygonscan</a>
            </Link>
          ) : null}
        </div>
        <div className="m1-5 align-right flex-1 text-lg text-indigo-500 underline">
          {address ? (
            <Link href={`https://polygonscan.com/address/${address}`}>
              <a target="_blank">View on Opensea</a>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}
