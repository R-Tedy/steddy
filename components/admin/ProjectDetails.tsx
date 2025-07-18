import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { getAllAppointments } from '@/lib/actions/appointments.actions'

const projectDetails = await getAllAppointments()

const ProjectDetails = () => {
  return (
    <Table className='my-4'>
      <TableCaption>
        Current project details.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='font-bold text-md'>No.</TableHead>
          <TableHead className='font-bold text-md'>Name</TableHead>
          <TableHead className='font-bold text-md'>Phone</TableHead>
          <TableHead className='font-bold text-md'>Email</TableHead>
          <TableHead className='font-bold text-md'>Service</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projectDetails.map((detail, index) => (
          <TableRow 
            key={index}
          >
            <TableCell>{index + 1}.</TableCell>
            <TableCell>{detail.name}</TableCell>
            <TableCell>{detail.phone}</TableCell>
            <TableCell>{detail.email}</TableCell>
            <TableCell>{detail.service}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ProjectDetails