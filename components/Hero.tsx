import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='p-2 mx-auto flex flex-col items-center max-h-screen w-full gap-2'>
      <div>
        <Image
          src={'/hero_01.png'}
          alt='hero_image'
          width={250}
          height={250}
          className=''
        />
        <div className='py-1 px-4 border rounded-full text-sm font-bold bg-[#02061f] flex justify-between items-center'>
          <div className='p-1 rounded-full bg-green-400  size-2'></div>
          <p>
            Available for Work
          </p>
        </div>
      </div>
      <div>
        <h1 className='font-black text-6xl text-center font-playfair capitalize'>
          Hi <br /> I am Stedy <br /> I make stuff
        </h1>
      </div>
      <div>
        <Button className='cursor-pointer font-bold' asChild>
          <Link href={'/book_service'} className='font-bold'>
            Book a Service
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default Hero