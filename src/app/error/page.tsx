'use client';

import { useSearchParams } from 'next/navigation';
import Stars from '../components/Stars';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { Suspense } from 'react';

function ErrorMessage() {
  const urlParams = useSearchParams();
  const message = urlParams.get('message');

  return (
    <h1 className="p-3 text-center bg-red-500 text-text text-2xl font-bold rounded-lg">
      {message ? message : 'An error occurred.'}
    </h1>
  );
}

export default function ErrorPage() {
  return (
    <main className="bg-secondary overflow-hidden relative h-screen">
      <Stars />
      <section className="h-full z-10 relative flex flex-col items-center justify-center gap-4">
        <Suspense
          fallback={
            <h1 className="p-3 text-center bg-red-500 text-text text-2xl font-bold rounded-lg">
              Loading message...
            </h1>
          }
        >
          <ErrorMessage />
        </Suspense>

        <Link
          href="/"
          className="flex items-center gap-2 bg-accent hover:bg-accent-dark transition-all duration-300 text-secondary-dark font-bold text-xl p-2 rounded-lg cursor-pointer"
        >
          <IconArrowLeft size={26} stroke={2.5} />  
          Go back
        </Link>
      </section>
    </main>
  );
}
