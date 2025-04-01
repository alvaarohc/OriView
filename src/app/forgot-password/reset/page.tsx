'use client';

import { resetPassword } from '@/actions/user';
import FormError from '@/app/components/ui/FormError';
import FormInput from '@/app/components/ui/FormInput';
import { ResetPasswordInputs } from '@/types';
import { type SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

type ResetPageInputs = Omit<ResetPasswordInputs, 'email'>;

export default function ResetPasswordResetPage() {
  const [authErrors, setAuthErrors] = useState(['']);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ResetPageInputs>();

  const newPassword = useWatch({ control, name: 'newPassword' });

  const onSubmit: SubmitHandler<ResetPageInputs> = async (data) => {
    console.log(data);
    const { error } = await resetPassword(data.newPassword);

    if (error) {
      setAuthErrors([error.message!]);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center gap-4 p-4 h-screen">
      <form
        className="flex flex-col items-center justify-center gap-4 p-10 bg-secondary-dark lg:w-1/2 w-[80%] h-auto  rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-black text-center">Reset your password</h1>

        {/* Form messages */}
        {authErrors[0] && (
          <div className="errors space-y-3">
            {authErrors.map((error) => (
              <FormError key={uuid()} error={error} />
            ))}
          </div>
        )}

        {Object.values(formErrors).length != 0 && (
          <div className="errors space-y-3">
            {Object.values(formErrors).map(
              (error) =>
                error.message != '' && (
                  <FormError key={uuid()} error={error.message!} />
                )
            )}
          </div>
        )}

        <FormInput
          {...register('newPassword', {
            required: 'You must provide a password.',
          })}
          type="password"
          placeholder="New password"
        />
        <FormInput
          {...register('repeatPassword', {
            required: false,
            validate: (value) => {
              if (value !== newPassword && newPassword) {
                return 'Passwords do not match';
              }
            },
          })}
          type="password"
          placeholder="Repeat password"
        />
        <FormInput
          type="submit"
          className="w-full outline-none font-bold bg-text hover:bg-accent-dark text-secondary duration-300"
          value="Reset password"
        />
      </form>
    </main>
  );
}
