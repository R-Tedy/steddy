'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod/v3'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const formSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().min(10).max(14),
  email: z.string().email('Input a valid email adress'),
  service: z.string().min(2),
})

const AppointmentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
    }
  });

  const  onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  };

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 w-full md:w-10/12 lg:w-7/12 p-4 bg-white/10 rounded-2xl border-2 shadow'>
        <FormField
          control={form.control}
          name='name'
          render={({field}) => (
            <FormItem>
              <FormLabel className='font-bold'>Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your name' {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({field}) => (
            <FormItem>
              <FormLabel className='font-bold'>Phone</FormLabel>
              <FormControl>
                <Input placeholder='Enter your phone number' {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({field}) => (
            <FormItem>
              <FormLabel className='font-bold'>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email address' {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='service'
          render={({field}) => (
            <FormItem>
              <FormLabel className='font-bold'>Service</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select your prefered service'/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Website Development'>Website Development</SelectItem>
                    <SelectItem value='System Development'>System Development</SelectItem>
                    <SelectItem value='Mobile App Development'>Mobile App Development</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <Button type='submit' className='font-bold cursor-pointer'>
          Make Appointment
        </Button>
      </form>
    </Form>
  )
}

export default AppointmentForm