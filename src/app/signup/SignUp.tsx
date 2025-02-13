'use client';

import React, { useState } from 'react';

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
        <input
          type="email"
          className="w-full bg-secondary-light rounded-md p-2 outline-solid outline-3 outline-transparent focus:outline-accent-dark focus:transition-all duration-350"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
        />
        <input
          type="password"
          className="w-full bg-secondary-light rounded-md p-2 outline-solid outline-3 outline-transparent focus:outline-accent-dark focus:transition-all duration-350"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
        />
        <input
          type="submit"
          className="w-full outline-none bg-text hover:bg-accent-dark text-secondary font-bold rounded-md p-2 transition-all duration-300"
          value="Sign up"
        />
      </div>
    </form>
  );
}
