type FormInputProps = {
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

/**
 * @param {string} className - Further style customization for the component.
 */
export default function FormInput({
  type,
  placeholder,
  value,
  onChange,
  className,
}: FormInputProps) {
  const inputClassName = `w-full bg-secondary-light rounded-md p-2 outline-solid
       outline-3 outline-transparent focus:outline-accent-dark
        focus:transition-all duration-350 ${className}`;

  return (
    <input
      type={type}
      className={inputClassName}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
