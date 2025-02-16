'use client';

import React, { useState } from 'react';
import FormInput from '../components/ui/FormInput';
import { signin } from '@/actions/user';
import { v4 as uuid } from 'uuid';
import FormError from '../components/ui/FormError';

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

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-4 py-10 px-8 bg-secondary-dark lg:w-1/2 w-[80%] md:min-h-1/3 h-1/2  rounded-lg"
    >
      <h1 className="text-3xl font-black text-center">Sign in</h1>
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
