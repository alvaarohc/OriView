'use client';

import React, { Suspense, useState } from 'react';
import FormInput from '../components/ui/FormInput';
import { signin } from '@/actions/user';
import { v4 as uuid } from 'uuid';
import FormError from '../components/ui/FormError';
import { useSearchParams } from 'next/navigation';
import { SignInInputs } from '@/types';
import { type SubmitHandler, useForm } from 'react-hook-form';

export default function SignIn() {
  const [authErrors, setAuthErrors] = useState(['']);
  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm<SignInInputs>();

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    const { error } = await signin(data);

    // Supabase auth errors
    if (error) {
      const errors = error.message.split('. ');
      setAuthErrors(errors);
    }
  };

  function AccountCreatedMessage() {
    const params = useSearchParams();
    const isFirstSignUp = params.get('acc_created');
    const isVerifiedSucces = params.get('acc_verified');

    if (!isFirstSignUp && !isVerifiedSucces) return null;

    return isFirstSignUp ? (
      <div className="bg-green-500/90 text-text text-center p-2 rounded-lg">
        <h2 className="text-xl font-bold">Account created!</h2>
        <p className="text-lg">Check your email to verify your account.</p>
      </div>
    ) : null;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-4 py-10 p-8 bg-secondary-dark lg:w-1/2 w-[80%] h-auto  rounded-lg"
    >
      <h1 className="text-3xl font-black text-center mb-4">Sign in</h1>

      {/* Form messages */}
      <Suspense
        fallback={
          <div className="bg-green-500 text-text text-center p-2 rounded-lg">
            <h2 className="text-xl font-bold">Loading message...</h2>
          </div>
        }
      >
        <AccountCreatedMessage />
      </Suspense>

      {authErrors[0] && (
        <div className="errors space-y-3">
          {authErrors.map((error) => (
            <FormError key={uuid()} error={error} />
          ))}
        </div>
      )}

      {Object.values(formErrors).length != 0 && (
        <div className="errors space-y-3">
          {Object.values(formErrors).map((error) => (
            <FormError key={uuid()} error={error.message!} />
          ))}
        </div>
      )}

      {/* Form inputs */}
      <div className="w-full flex flex-col gap-4">
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
          })}
          type="password"
          placeholder="Password"
        />
        <FormInput
          type="submit"
          className="w-full outline-none font-bold bg-text hover:bg-accent-dark text-secondary duration-300"
          value="Sign in"
        />
      </div>
    </form>
  );
}
