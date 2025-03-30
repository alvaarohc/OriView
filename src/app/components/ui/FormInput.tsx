'use client';

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function FormInput({ className, ...props }: FormInputProps) {
  const inputClassName = `w-full bg-secondary-light rounded-md p-2 outline-solid
       outline-3 outline-transparent focus:outline-accent-dark
        focus:transition-all duration-350 ${className}`;

  return <input className={inputClassName} {...props} />;
}
