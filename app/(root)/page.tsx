import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Works from '@/components/Works'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Works/>
    </>
  )
}

export default page