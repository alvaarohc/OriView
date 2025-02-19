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

  if (error) {
    let customMessage = 'An error occurred. Please try again.';

    if (error.message.includes('Invalid login credentials')) {
      customMessage = 'Incorrect email or password.';
    } else if (error.message.includes('Email not confirmed')) {
      customMessage = 'You need to verify your email before logging in.';
    }

    return {
      error: { message: customMessage },
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

  if (error) {
    let customMessage = 'An error occurred. Please try again.';

    if (error.message.includes('Anonymous sign-ins are disabled')) {
      customMessage = 'You must provide an email and password.';
    }
    return {
      error: { message: customMessage },
    };
  }

  revalidatePath('/', 'layout');
  redirect('/signin?signupsuccess=true');
}
