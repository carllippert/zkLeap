import Head from 'next/head'
import { Container } from '@/components/Container'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Jobs from '@/components/JobList'

export default function Home() {
  return (
    <>
      <Head>
        <title>zkLeap - Find your next job, privately.</title>
        <meta name="description" content="Find your next job, privately" />
      </Head>
      <Header dontShowGetStarted/>
      <main>
        <Container className="pb-12 text-center">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Find your next job{' '}
            <span className="bg-gradient-to-br from-purple-400 to-blue-600 bg-clip-text font-extrabold text-transparent">
              privately.
            </span>
          </h1>
        </Container>
        <Container className="max-w-4xl">
          <button
            type="button"
            className="m-2 inline-flex items-center rounded-full border border-transparent bg-purple-600 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Solidity
          </button>
          <button
            type="button"
            className="m-2 inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Data Science
          </button>
          <button
            type="button"
            className="m-2 inline-flex items-center rounded-full border border-transparent bg-green-600 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Tokenomics
          </button>
          <button
            type="button"
            className="m-2 inline-flex items-center rounded-full border border-transparent bg-orange-600 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Zero Knowledge
          </button>
          <button
            type="button"
            className="m-2 inline-flex items-center rounded-full border border-transparent bg-cyan-600 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cryptography
          </button>
        </Container>
        <Jobs />
      </main>
      <Footer />
    </>
  )
}
