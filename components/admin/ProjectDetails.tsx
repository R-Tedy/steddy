import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { projectDetails } from '@/constants'

const ProjectDetails = () => {
  return (
    <Table>
      <TableCaption>
        Current project details.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>No.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Service</TableHead>
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