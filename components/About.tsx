import { skillsSheet } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className='p-4 flex flex-col-reverse lg:flex-row' id='about'>
      <div className='flex-1 lg:pl-12'>
        {/* <h2 className='uppercase text-green-400 font-bold font-playfair text-lg'>
          And who am I?
        </h2>
        <p className='font-sans'>
          Hi, <br />
          I wear many hats and do many things but in summary my aim is to <span className='italic text-green-400 text-lg font-semibold'>make the world a better place.</span> To do this I have acquired a vast number of skills under my portfolio. I am sure one of these will interest you. If so <Link href={'/book_service'} className='underline text-green-400 text-lg italic font-semibold'>Reach out.</Link>
        </p> */}
        <div>
          <h2 className='font-playfair font-semibold text-lg capitalize text-green-400 '>
            Skills Sheet
          </h2>
          <div className='flex gap-4 flex-wrap items-center justify-center p-4'>
            {skillsSheet.map((skill, index) => (
              <div
                key={index}
                className='w-64 p-1 rounded-2xl cursor-pointer hover:bg-white/10 px-5 border'
              >
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