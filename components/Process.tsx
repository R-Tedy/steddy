import { workStages } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Process = () => {
  return (
    <section className='p-2'>
      <h2 className='font-playfair text-lg text-center'>
        <span className='font-semibold'>You might be wondering...</span> <br />
        <span className='text-2xl font-black text-green-400'>How Do I work?</span>
      </h2>
      <div className='flex gap-4 flex-wrap p-1 justify-center'>
        {workStages.map((stage) => (
          <div
            key={stage.number}
            className='relative bg-white/20 border p-4 rounded-2xl md:w-5/12'
          >
            <div className='flex justify-between items-center'>
              <div className='text-secondary font-bold bg-white size-10 flex justify-center items-center text-2xl rounded-2xl'>
                {stage.number}
              </div>
              <Image
                src={stage.image}
                alt={stage.title}
                height={32}
                width={32}
                className='object-cover'
              />
            </div>
            <div>
              <h3 className='font-bold text-2xl font-playfair pt-4 border-b'>
                {stage.title}
              </h3>
              <p className='font-sans'>
                {stage.description}
              </p>
            </div>
            <div className='flex items-center justify-center pt-4'>
              <Button asChild className='font-bold capitalize'>
                <Link href={'/#appointment'}>
                  Book an appointment
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process