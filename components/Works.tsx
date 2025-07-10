import { worksLists } from '@/constants'
import React, { useState } from 'react'

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className='p-4'>
      <h2 className='text-center font-playfair font-bold text-xl capitalize text-green-400'>
        Here are some of my works
      </h2>
      {worksLists.map((works, index) => {
        return (
          <div
            key={index}
          >
            <div>
              <h3 className='text-center font-playfair font-semibold text-lg'>
                {works.title}
              </h3>
              <p className='text-center font-playfair font-semibold text-lg'>
                {works.category}
              </p> 
            </div>
            
          </div>
        )
      })}
    </section>
  )
}

export default Works