'use client';

import React, { useState } from 'react';
import FormInput from '../components/ui/FormInput';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form className="flex flex-col items-center gap-8 py-10 px-8 bg-secondary-dark lg:w-1/2 w-[80%] h-1/2  rounded-lg">
      <h1 className="text-3xl font-black text-center">Sign up</h1>
      <div className="w-full flex flex-col gap-4">
        <FormInput
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
        />
        <FormInput
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
        />
        <FormInput
          type="submit"
          className="w-full outline-none font-bold bg-text hover:bg-accent-dark text-secondary duration-300"
          value="Sign up"
        />
      </div>
    </form>
  );
}
