'use client'
import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Header = () => {
  return (
    <>
      <nav className='flex items-center justify-center'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href='/' className='cursor-pointer font-semibold text-sm'>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
             {/* <NavigationMenuItem>
              <NavigationMenuLink href='/admin' className='cursor-pointer font-semibold text-sm'>
                Admin
              </NavigationMenuLink>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <FloatingWhatsApp
        phoneNumber='+254759693618'
        accountName='Stedy'
        avatar='/logo.svg'
        statusMessage=''
        chatMessage='Hi, How can I be of help?'
        darkMode={true}
      />
    </>
  )
}

export default Header