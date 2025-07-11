import About from '@/components/About'
import Appointment from '@/components/Appointment'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Works from '@/components/Works'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Works/>
      <Process/>
      <Appointment/>
    </>
  )
}

export default page