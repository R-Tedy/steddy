import React from 'react'
import AppointmentForm from './AppointmentForm'

const Appointment = () => {
  return (
    <section className='p-2' id='appointment'>
      <h2 className='text-lg capitalize text-center font-playfair'>
        <span>Made up your mind about working with me?</span> <br />
        <span className='text-2xl text-green-400 font-bold'>Book an appointment</span>
      </h2>
      <div className='flex items-center justify-center py-8 flex-col'>
        <AppointmentForm/>
        <p className='text-lg font-semibold text-center p-4'>
          You can also reach me via <span className='font-bold text-2xl text-green-400'>WhatsApp</span> <br /> 
          <span>Just Click the <span className='italic text-xl text-green-400/50'>glowing button</span> in the corner</span>
        </p>
      </div>
    </section>
  )
}

export default Appointment