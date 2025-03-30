'use client';

import React, { Suspense, useState } from 'react';
import FormInput from '../components/ui/FormInput';
import { signin } from '@/actions/user';
import { v4 as uuid } from 'uuid';
import FormError from '../components/ui/FormError';
import { useSearchParams } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(['']);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { error } = await signin(formData);

    if (error) {
      const errors = error.message.split('. ');
      setErrors(errors);
    }
  };

  function SignupMessage() {
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
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-4 py-10 px-8 bg-secondary-dark lg:w-1/2 w-[80%] h-[60%]  rounded-lg"
    >
      <h1 className="text-3xl font-black text-center">Sign in</h1>
      <Suspense
        fallback={
          <div className="bg-green-500 text-text text-center p-2 rounded-lg">
            <h2 className="text-xl font-bold">Loading message...</h2>
          </div>
        }
      >
        <SignupMessage />
      </Suspense>
      <div className="errors space-y-3">
        {errors[0] &&
          errors.map((error) => <FormError key={uuid()} error={error} />)}
      </div>
      <div className="w-full flex flex-col gap-4">
        <FormInput
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          name="email"
        />
        <FormInput
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
          name="password"
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
