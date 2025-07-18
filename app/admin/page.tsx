import ProjectDetails from '@/components/admin/ProjectDetails'
import { projectstatus } from '@/constants'
import { cn } from '@/lib/utils'
import React from 'react'

const page = () => {
  return (
    <main className='p-4'>
      <section className='flex justify-center items-center gap-2 lg:gap-4 flex-wrap'>
        {projectstatus.map(({status, number}, index) => (
          <div 
            className={cn(
              'p-2 w-full rounded-xl flex items-center justify-center gap-1 flex-col md:w-5/12 lg:w-3/12',
              status === 'compelete' && 'bg-green-500/50',
              status === 'pending' && 'bg-amber-600/50',
              status === 'incompelete' && 'bg-red-700/50'
            )}
            key={index}
          >
            <h2 className='font-bold font-playfair text-4xl'>
              {number} <span className='text-sm'>projects</span>
            </h2>
            <p className='capitalize  font-bold text-lg'>
              {status}
            </p>
          </div>
        ))}
      </section>
      <section className='py-4 lg:pl-24'>
        <h2 className='font-playfair font-bold text-lg'>Project details</h2>
        <ProjectDetails/>
      </section>
    </main>
  )
}

export default page