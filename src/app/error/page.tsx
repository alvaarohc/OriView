'use client';

import { useSearchParams } from 'next/navigation';
import Stars from '../components/Stars';
import Link from 'next/link';
import Header from '../components/Header';
import { IconHome } from '@tabler/icons-react';

export default function ErrorPage() {
  const urlParams = useSearchParams();
  const message = urlParams.get('message');

  return (
    <main className="bg-secondary overflow-hidden relative h-screen">
      <Header />
      <Stars />
      <section className="h-[80%] z-10 relative flex flex-col items-center justify-center gap-4">
        <h1 className="p-3 text-center bg-red-500 text-text text-2xl font-bold rounded-lg">
          {message ? message : 'An error ocurred.'}
        </h1>
        <Link
          href="/"
          className="bg-accent hover:bg-accent-dark transition-all duration-300 text-secondary-dark font-bold text-xl p-2 rounded-lg cursor-pointer"
        >
          <IconHome size={40} />
        </Link>
      </section>
    </main>
  );
}
