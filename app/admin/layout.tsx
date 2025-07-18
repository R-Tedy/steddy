import NavBar from '@/components/admin/NavBar'
import React, { ReactNode } from 'react'

const layout = ({children} : {children : ReactNode}) => {
  return (
    <main>
      <NavBar/>
      {children}
    </main>
  )
}

export default layout