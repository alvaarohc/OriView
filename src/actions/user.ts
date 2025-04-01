'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import type { SupabaseClient } from '@supabase/supabase-js';
import {
  ResetPasswordInputs,
  SignInInputs,
  SignUpInputs,
  UserNameFormInputs,
} from '@/types';

// DB tables
const tables = {
  profiles: 'user_profiles',
};

export async function setProfileName(formData: UserNameFormInputs) {
  const supabase = await createClient();

  // Get the user from the session
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let userId = '';
  const userName = formData.username;

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

// @TODO: add validation
export async function signin(data: SignInInputs) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword(data);

  // display a different message than the supabase's default message for missing password
  if (error) {
    console.log(error.message);
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
    return { error: null };
  }
}

// @TODO: add validation
export async function signup(data: SignUpInputs) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp(data);

  /*
   *  display a different message than the supabase's default message
   *  when no information is provided
   */

  if (error) {
    let customMessage = 'An error occurred, please try again.';

    if (
      error.message.includes(
        'Password should contain at least one character of each'
      )
    ) {
      customMessage =
        'Password must contain: Uppercase and lowercase characters, numbers and symbols.';
    }
    return {
      error: { message: customMessage },
    };
  }

  revalidatePath('/', 'layout');
  redirect('/signin?acc_created=true');
}

export async function sendResetPasswordEmail(
  data: Pick<ResetPasswordInputs, 'email'>
) {
  const response = {
    error: { message: '' },
    success: {
      status: false,
    },
  };

  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(data.email);

  if (error) {
    response.error = { message: error.message };
    return response;
  } else {
    response.success = {
      status: true,
    };
    return response;
  }
}

export async function resetPassword(data: ResetPasswordInputs['newPassword']) {
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password: data,
  });

  if (!error) {
    revalidatePath('/', 'layout');
    redirect('/dashboard?passwordreset=true');
  } else {
    console.log(error.message);
    let customMessage = error.message;

    if (
      error.message.includes(
        'Password should contain at least one character of each'
      )
    ) {
      customMessage =
        'Password must contain: Uppercase and lowercase characters, numbers and symbols.';
    }
    return {
      error: { message: customMessage },
    };
  }
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
