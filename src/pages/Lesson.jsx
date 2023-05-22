import Head from 'next/head'

import { Footer } from '@/components/lessonComponents/Footer'
import { Header } from '@/components/lessonComponents/Headerr'
import { Hero } from '@/components/lessonComponents/Hero'
import { Newsletter } from '@/components/lessonComponents/Newsletter'
import { Schedule } from '@/components/lessonComponents/Schedule'
import { Speakers } from '@/components/lessonComponents/Speakers'
import { Sponsors } from '@/components/lessonComponents/Sponsors'

export default function Lesson() {
  return (
    <>
      <Head>
        <title>ATG Academy</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Sponsors id="Sponsors" />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
