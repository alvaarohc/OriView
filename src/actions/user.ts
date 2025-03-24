'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import type { SupabaseClient } from '@supabase/supabase-js';

// DB tables
const tables = {
  profiles: 'user_profiles',
};

export async function hasProfileName(
  supabaseClient: SupabaseClient<any, 'public', any>
) {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  if (user) {
    const {
      data: { username },
    } = await supabaseClient
      .from(tables.profiles)
      .select()
      .match({ id: user.id })
      .single();

    if (!username) {
      redirect('/signin/account-details');
    } else {
      revalidatePath('/', 'layout');
      redirect('/dashboard');
    }
  }
}

export async function setProfileName(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let userId = '';
  const userName = formData.get('user-name');

  if (user) {
    userId = user.id;
  }

  const { error } = await supabase
    .from(tables.profiles)
    .update({ username: userName })
    .eq('id', userId);

  if (error) {
    return {
      error: { message: error.message },
    };
  } else {
    revalidatePath('/', 'layout');
    redirect('/dashboard?usernameupdated=true');
  }
}

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
    let customMessage = 'An error occurred, please try again.';

    if (error.message.includes('Invalid login credentials')) {
      customMessage = 'Incorrect email or password.';
    } else if (error.message.includes('Email not confirmed')) {
      customMessage = 'You need to verify your email before logging in.';
    }

    return {
      error: { message: customMessage },
    };
  } else {
    await hasProfileName(supabase);
    return { error: null };
  }
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
    let customMessage = 'An error occurred, please try again.';

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

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return {
      error: { message: error.message },
    };
  }

  revalidatePath('/', 'layout');
  redirect('/signin');
}

export async function getUser() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  return data.user;
}
