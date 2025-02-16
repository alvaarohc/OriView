type FormErrorProps = {
  error: string;
};

export default function FormError({ error }: FormErrorProps) {
  return (
    <p className="bg-red-500 text-center p-2 rounded-md font-bold">
      {error}
    </p>
  );
}
