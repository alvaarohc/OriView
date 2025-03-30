'use client';

import React, { useState } from 'react';
import FormInput from '../components/ui/FormInput';
import { signup } from '@/actions/user';
import FormError from '../components/ui/FormError';
import { v4 as uuid } from 'uuid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignUpInputs } from '@/types';


export default function SignUp() {
  const {
    handleSubmit,
    formState: { errors: formErrors },
    register,
  } = useForm<SignUpInputs>();
  const [authErrors, setAuthErrors] = useState(['']);

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {

    const { error } = await signup(data);

    // Supabase auth errors
    if (error) {
      const errors = error.message.split('. ');
      setAuthErrors(errors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-4 py-10 px-8 bg-secondary-dark lg:w-1/2 w-[80%] md:min-h-1/3 h-1/2  rounded-lg"
    >
      <h1 className="text-3xl font-black text-center">Sign up</h1>
      <div id="form-errors" className="errors space-y-3">
        {formErrors &&
          Object.values(formErrors).map((error) => (
            <FormError key={uuid()} error={error.message!} />
          ))}
      </div>
      <div id="auth-errors" className="errors space-y-3">
        {authErrors[0] &&
          authErrors.map((error) => <FormError key={uuid()} error={error} />)}
      </div>
      <div className="form-inputs w-full flex flex-col gap-4">
        <FormInput
          {...register('email', {
            required: 'You must provide an email.',
          })}
          type="email"
          placeholder="Email"
        />
        <FormInput
          {...register('password', {
            required: 'You must provide a password.',
            minLength: {
              value: 8,
              message: 'Password must be 8+ characters long.',
            },
          })}
          type="password"
          placeholder="Password"
        />
        <input
          type="submit"
          className="w-full outline-none font-bold bg-text p-2 rounded-lg hover:bg-accent-dark text-secondary duration-300"
          value="Sign up"
        />
      </div>
    </form>
  );
}
