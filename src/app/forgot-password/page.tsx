'use client';

import { type SubmitHandler, useForm } from 'react-hook-form';
import FormInput from '@/app/components/ui/FormInput';
import FormError from '@/app/components/ui/FormError';
import { v4 as uuid } from 'uuid';
import { ResetPasswordInputs } from '@/types';
import { sendResetPasswordEmail } from '@/actions/user';
import { useState } from 'react';

export default function ResetPasswordEmailPage() {
  const [authErrors, setAuthErrors] = useState(['']);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ResetPasswordInputs>();

  const onSubmit: SubmitHandler<ResetPasswordInputs> = async (data) => {
    setIsEmailSent(false);
    const response = await sendResetPasswordEmail(data);

    console.log(response)

    if (!response.success) {
      setAuthErrors([response.error.message]);
    } else if (response.success) {
      setIsEmailSent(true);
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
        {isEmailSent && (
          <div className="bg-green-500 text-text text-center p-2 rounded-lg">
            <h2 className="text-xl font-bold">
              Password reset email sent, check your inbox.
            </h2>
          </div>
        )}
        
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

        <div className="w-full flex flex-col gap-4">
          <FormInput
            {...register('email', {
              required: 'You must provide an email.',
            })}
            type="email"
            placeholder="Email"
          />
          <FormInput
            type="submit"
            className="w-full outline-none font-bold bg-text hover:bg-accent-dark text-secondary duration-300"
            value={isEmailSent ? 'Resend email' : 'Send reset email'}
          />
        </div>
      </form>
    </main>
  );
}
