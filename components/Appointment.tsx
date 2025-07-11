import React from 'react'
import AppointmentForm from './AppointmentForm'

const Appointment = () => {
  return (
    <section className='p-2'>
      <h2 className='text-lg capitalize text-center font-playfair'>
        <span>Made up your mind about working with me?</span> <br />
        <span className='text-2xl text-green-400 font-bold'>Book an appointment</span>
      </h2>
      <div className='flex items-center justify-center py-4'>
        <AppointmentForm/>
      </div>
    </section>
  )
}

export default Appointment