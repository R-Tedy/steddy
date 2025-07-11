'use client'
import { worksLists } from '@/constants'
import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);

  const totalMajorCategories = worksLists.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalMajorCategories) % totalMajorCategories;
    setCurrentIndex(newIndex);
  }

  return (
    <section className='p-4'>
      <h2 className='text-center font-playfair font-bold text-xl capitalize text-green-400'>
        Here are some of my works
      </h2>
        {worksLists.map((work, index) => {
          const isActive = index === currentIndex;

          const totalProjects =work.data.length;

          const goToProject = (i) => {
            const newI = (i + totalProjects) % totalProjects;
            setSecondIndex(newI);
          };

          const getProjectAt = (iOffset) => {
            return work.data[(secondIndex + iOffset + totalProjects) % totalProjects]
          }

          const currentProject = getProjectAt(0);
          const prevProject = getProjectAt(-1);
          const nextProject = getProjectAt(+1);

          return (
            <>
              <nav 
                className='text-center flex justify-center gap-2 font-playfair text-lg' 
                aria-label='Major Navigation'
                key={index}
              >
                <button
                  className={` cursor-pointer
                    ${isActive ?
                      'font-semibold underline':
                      'text-white/50'
                    }
                  `}
                  onClick={() => goToSlide(index)}
                >
                  {work.category}
                </button>
              </nav>
              <div className='flex justify-center relative py-2'>
                <div className='flex justify-between items-center w-full absolute lg:bottom-6/12 bottom-5/12'>
                  <Button
                    onClick={() => goToProject(secondIndex + 1)}
                    className='cursor-pointer font-semibold'
                    variant='secondary'
                  >
                    {nextProject.title}
                  </Button>
                  <Button
                    onClick={() => goToProject(secondIndex - 1)}
                    className='cursor-pointer font-semibold'
                    variant='secondary'
                  >
                    {prevProject.title}
                  </Button>
                </div>
                <div className='px-4 pt-4 border bg-white/10 rounded-2xl w-full lg:w-8/12 flex flex-col gap-1 lg:flex-row'>
                  <div className='flex flex-col gap-2'>
                    <h3 className='font-playfair font-bold text-lg border-b'>
                      {currentProject.title}
                    </h3>
                    <p className='font-sans'>
                      {currentProject.intro}
                    </p>
                    <div>
                      <h3 className='font-bold'>
                        Features:
                      </h3>  
                        <ul className='flex flex-col gap-2'>
                          {currentProject.stats.map((stat, i) => (
                            <li
                              key={i}
                              className='flex gap-2'
                            >
                              <Image
                                src={'/icons/check_small.svg'}
                                alt='check'
                                height={24}
                                width={24}
                                className='p-1 rounded-full border'
                              />
                              {stat}
                            </li>
                          ))}
                        </ul>
                        <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
                          <Button asChild className='font-semibold '>
                            <Link href={currentProject.siteUrl} target='blank'>
                              Visit Site
                            </Link>
                          </Button>
                          <Button asChild className='font-semibold '>
                            <Link href={currentProject.gitUrl} target='blank'>
                              Git Repo
                            </Link>
                          </Button>
                        </div>
                    </div> 
                  </div>
                    <Image
                      src={currentProject.img}
                      alt={currentProject.title}
                      width={250}
                      height={250}
                      className='object-cover w-full h-72 rounded-t-2xl lg:w-5/12'
                    />
                </div>
              </div>
            </>
          )
        })}
    </section>
  )
}

export default Works