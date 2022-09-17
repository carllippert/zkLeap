import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'
import RainbowConnectButton from './RainbowConnectButton'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CreateProfileSteps() {
  const [step, setStep] = useState(0)
  const [complete, setComplete] = useState(false)
  const [steps, setSteps] = useState([
    {
      name: 'Create new wallet account',
      description: 'Open Metamask. Create new account.',
      href: '#',
      status: 'current',
    },
    {
      name: 'Sign in with your new account',
      description: 'This is how we get to know you',
      href: '#',
      status: 'upcoming',
    },
    {
      name: 'Mint Private Badge',
      description: 'Show off your skills in private',
      href: '#',
      status: 'upcoming',
    },
  ])

  const advanceStep = (index) => {
    if (index == step) {
      if (step < steps.length - 1) {
        console.log('index -> ' + index)
        const newSteps = [...steps]

        newSteps[step].status = 'complete'
        newSteps[step + 1].status = 'current'

        setStep(step + 1)

        setSteps(newSteps)
      } else {
        const newSteps = [...steps]

        newSteps[step].status = 'complete'

        setSteps(newSteps)

        setComplete(true)
      }
    }
  }

  return (
    <nav aria-label="Progress">
      <ol role="list" className="h-full overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? 'pb-10' : '',
              'relative'
            )}
            onClick={() => advanceStep(stepIdx)}
          >
            {step.status === 'complete' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
                    aria-hidden="true"
                  />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                      <CheckIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium">{step.name}</span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <a
                  href={step.href}
                  className="group relative flex items-start"
                  aria-current="step"
                >
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-indigo-600">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-gray-500">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
        <li>
          <div className="col-span-full pt-20 pb-20 ">
            <Link href="/jobs">
              <Button
                disabled={!complete}
                style={{ width: '145px' }}
                className=" rounded-xl bg-blue-400 text-white hover:bg-gray-200 disabled:bg-gray-200"
              >
                Explore Jobs
              </Button>
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  )
}
