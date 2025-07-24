import { skillsSheet } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const About = () => {
  return (
    <section className='p-4 flex flex-col-reverse lg:flex-row' id='about'>
      <div className='flex-1 lg:pl-12'>
        <div>
          <h2 className='font-playfair font-semibold text-lg capitalize text-green-400 '>
            Skills Sheet
          </h2>
          <div className='flex gap-4 flex-wrap items-center justify-center py-4'>
            {skillsSheet.map((skill, index) => (
              <Link 
                href={`/${skill.id}`}
                key={index}
                className='w-full md:w-64 py-3 rounded-2xl  px-5 border hover:bg-accent'
              >
                <div className='w-full'>
                  <div className='flex justify-between items-center'>
                    <div >
                      <Image
                        src={skill.img}
                        alt={skill.skill}
                        width={50}
                        height={50}
                      />
                      <p className='font-semibold font-sans text-lg'>
                        {skill.skill}
                      </p> 
                    </div>
                      <Image
                        src={'/icons/angle_arrow.svg'}
                        alt='arrow'
                        width={24}
                        height={24}
                        className='p-1 size-9 border-green-400 rounded-full border'
                      />
                  </div>
                </div>
              </Link>  
            ))}
          </div>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <Image
          src={'/hero_02.png'}
          alt='about image'
          height={250}
          width={250}
        />
      </div>
    </section>
  )
}

export default About