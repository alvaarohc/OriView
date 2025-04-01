'use client';

import { ChangeEvent, Suspense, useState } from 'react';
import FormInput from '@/app/components/ui/FormInput';
import { setProfileName } from '@/actions/user';
import { useSearchParams } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import FormError from '@/app/components/ui/FormError';
import { UserNameFormInputs } from '@/types';

export default function AccountDetailsPage() {
  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm<UserNameFormInputs>();

  const formErrorsObject = Object.values(formErrors);

  const onSubmit: SubmitHandler<UserNameFormInputs> = async (data) => {
    const { error } = await setProfileName(data);

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
    <main className="flex flex-col items-center justify-center h-full">
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
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 lg:w-1/2 w-[80%] h-auto rounded-lg"
      >
        <h1 className="text-3xl font-black text-center">
          How'd you like to be called?
        </h1>
        {/* Form messages */}

        {formErrorsObject.length != 0 && (
          <div>
            {formErrorsObject.map((error) => (
              <FormError key={error.message} error={error.message!} />
            ))}
          </div>
        )}

        <div className="w-full flex flex-col gap-4">
          <FormInput
            {...register('username', {
              required: 'You must provide a username.',
              minLength: {
                value: 6,
                message: 'Username must be at least 6 characters.',
              },
            })}
            type="text"
            placeholder="Cool user name..."
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
