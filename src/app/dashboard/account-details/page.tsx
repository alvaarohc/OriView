'use client';

import { ChangeEvent, Suspense, useState } from 'react';
import FormInput from '@/app/components/ui/FormInput';
import { setProfileName } from '@/actions/user';
import { useSearchParams } from 'next/navigation';

export default function AccountDetailsPage() {
  const [userName, setUserName] = useState('');

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { error } = await setProfileName(formData);

    console.log(error);
  };
  function VerificationMessage() {
    const params = useSearchParams();
    const isVerifiedSucces = params.get('acc_verified');

    return isVerifiedSucces ? (
      <div className="bg-green-500/90 text-text text-center p-2 rounded-lg">
        <h2 className="text-xl font-bold">Account verified!</h2>
      </div>
    ) : null;
  }
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Suspense
        fallback={
          <p className="bg-green-500/90 text-text text-center p-2 rounded-lg">
            Loading message...
          </p>
        }
      >
        <VerificationMessage />
      </Suspense>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4 py-10 px-8 lg:w-1/2 w-[80%] md:min-h-1/3 h-1/2  rounded-lg"
      >
        <h1 className="text-3xl font-black text-center">
          How'd you like to be called?
        </h1>
        <div className="w-full flex flex-col gap-4">
          <FormInput
            type="text"
            name="user-name"
            placeholder="Cool user name..."
            value={userName}
            onChange={handleUserNameChange}
          />
          <FormInput
            type="submit"
            className="w-full outline-none font-bold bg-text hover:bg-accent-dark text-secondary duration-300"
            value="Next"
          />
        </div>
      </form>
    </main>
  );
}
