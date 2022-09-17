import Head from 'next/head'
import { Container } from '@/components/Container'
import { useRouter } from 'next/router'
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
import { useEffect } from 'react'
import BadgeGrid from '@/components/BadgeGrid'
import ProfileHeader from '@/components/ProfileHeader'

export default function Profile() {
  const router = useRouter()

  const { address } = router.query

  useEffect(() => {
    //fetch shit
  })

  return (
    <>
      <Head>
        <title>zkLeap - Find your next job, privately.</title>
        <meta name="description" content="Find your next job, privately" />
      </Head>
      <Header dontShowGetStarted />
      <main>
        <Container className="m-auto">
          <ProfileHeader />
          <BadgeGrid />
        </Container>
      </main>
      <Footer />
    </>
  )
}
