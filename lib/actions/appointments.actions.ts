'use server'
import { cookies } from "next/headers";
import { createClient } from "../supabase/server";



export const createAppointment = async (formData: CreateAppointment) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {data, error} = await supabase.from('appointments').insert({...formData}).select();

  if (error || !data) throw new Error(error?.message || 'Failed to create a companion.')

  return data[0];
}

export const getAllAppointments = async () => {
  const cookieStore =  cookies()
  const supabase = createClient(cookieStore);

  const query = supabase.from('appointments').select();

  const {data: projectDetails, error} = await query;

  if (error) throw new Error(error.message);

  return projectDetails;
}