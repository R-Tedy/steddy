import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='p-4 min-h-screen w-full flex justify-center items-center flex-col lg:flex-row'>
      <Image
        src={'/hero_01.png'}
        alt='admin hero image'
        width={300}
        height={300}
        className='object-cover'
      />
      <h1 className='font-black font-sans'>
        Admin page
      </h1>
    </main>
  )
}

export default page