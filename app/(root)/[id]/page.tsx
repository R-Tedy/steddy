import { Button } from '@/components/ui/button';
import { skillsSheet } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface skillsSessionProps {
  params: Promise<{
    id: string,
  }>;
}

const page =async ({params} : skillsSessionProps) => {
  const {id} = await params;

  console.log(id)
  

  return (
    <section>
      {skillsSheet.map((skill, index) => {
        if (skill.id === id) {
          return (
            <div
              key={index}
              className='px-4 flex flex-col items-center'
            >
              <h1 className='font-bold text-2xl font-playfair text-center text-green-400'>
                {skill.skill}
              </h1>
              {skill.desc.map((desc, index) => (
                <p 
                  className='text-center p-2 font-sans md:w-10/12 lg:w-7/12'
                  key={index}
                >
                  {desc}
                </p>
              ))}
              <p className='font-bold text-center p-2 font-sans md:w-10/12 lg:w-7/12 italic text-lg'>
                {skill.callToAction}
              </p>
              <Button 
                asChild 
                className='font-black font-playfair text-xl w-11/12 md:w-10/12 lg:w-5/12 my-4 p-2 capitalize h-12'
                variant='default'
              >
                <Link href={'tel:+254759693618'} 
                  className='w-full p-2'
                >
                  <Image
                    src={'/icons/phone.svg'}
                    alt='phone icon'
                    width={32}
                    height={32}
                  />
                  Give me a call
                </Link>
              </Button>
              <div className='w-full flex gap-5 flex-wrap items-center justify-center p-2'>
                {skill.sampleWorks?.map((sample, index) => (
                  <div
                    key={sample.id}
                    className='w-full md:w-5/12 lg:w-3/12 h-72 flex flex-col'
                  >
                    <Image
                      src={sample.imgUrl}
                      alt={sample.alt}
                      width={250}
                      height={250}
                      className='object-cover w-full h-[90%] rounded-2xl border-4 border-white opacity-50'
                    />
                    <p className='font-black text-2xl text-center font-playfair'>
                      {index + 1}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className='text-center font-bold font-playfair text-lg capitalize'>
                Sooo... <br />
                If impressed.... <br />
              </h2>
              <Button 
                asChild 
                className='font-black font-playfair text-xl w-11/12 md:w-10/12 lg:w-5/12 mt-4 mb-8 p-2 capitalize h-12'
                variant='default'
              >
                <Link href={'tel:+254759693618'} 
                  className='w-full p-2'
                >
                  <Image
                    src={'/icons/phone.svg'}
                    alt='phone icon'
                    width={32}
                    height={32}
                  />
                  Give me a call
                </Link>
              </Button>
            </div>
          )
        }
      })}
    </section>
  )
}

export default page