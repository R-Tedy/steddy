'use client'
import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../ui/navigation-menu'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const NavBar = () => {

  return (
    <div className='fixed w-full bottom-0 p-2 lg:top-0 lg:w-fit'>
      <nav className='flex items-center justify-center'>
        <NavigationMenu>
          <NavigationMenuList className='lg:flex lg:flex-col'>
            <NavigationMenuItem >
                <NavigationMenuLink 
                  href='/admin' 
                  className={cn(
                    'flex justify-center items-center'
                  )}
                >
                  <Image
                    src={'/icons/home.svg'}
                    alt='home'
                    height={32}
                    width={32}
                    className='object-cover'
                  />
                </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
    
  )
}

export default NavBar