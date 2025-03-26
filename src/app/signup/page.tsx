import Link from 'next/link';
import SignUp from './signupForm';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 p-4 h-screen">
      <SignUp />
      <div className="md:w-auto w-50">
        <p className="text-center">
          Already have an account?{' '}
          <Link className="font-bold" href="/signin">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
