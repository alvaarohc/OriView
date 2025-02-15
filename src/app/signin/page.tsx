import Link from 'next/link';
import SignIn from './SignIn';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-4 h-screen">
      <SignIn />
      <div className="flex items-center md:flex-row flex-col md:gap-5 gap-1 md:w-auto w-50">
        <p className="text-center">
          Don't have an account?{' '}
          <Link className="font-bold" href="/signup">
            Sign up
          </Link>
        </p>
        <p>
          <Link href="/forgot-password">Forgot password?</Link>
        </p>
      </div>
    </main>
  );
}
