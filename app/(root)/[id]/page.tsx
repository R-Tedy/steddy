import { skillsSheet } from '@/constants';
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
            >
              <h1 className='font-bold text-2xl font-playfair text-center text-green-400'>
                {skill.skill}
              </h1>
            </div>
          )
        }
      })}
    </section>
  )
}

export default page