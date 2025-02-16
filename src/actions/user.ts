'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function signin(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // @TODO: add validation
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  // display a different message than the supabase's default message for missing password
  if (error && !data.password) {
    error.message = 'You must provide a password';
  }

  if (error) {
    return {
      error,
    };
  }

  console.log(supabase.auth.getUser());

  revalidatePath('/', 'layout');
  redirect('/dashboard');
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // @TODO: add validation
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  /*
   *  display a different message than the supabase's default message
   *  when no information is provided
   */
  if (error && error.message === 'Anonymous sign-ins are disabled') {
    error.message = 'You must fill all fields.';
  }

  if (error) {
    return {
      error,
    };
  }

  revalidatePath('/', 'layout');
  redirect('/signin?signupsuccess=true');
}
