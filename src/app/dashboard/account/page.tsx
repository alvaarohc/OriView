'use client';

import { useUserStore } from '@/app/stores/userStore';

export default function AccountPage() {
  const { username } = useUserStore();

  return (
    <main>
      <h1 className='text-2xl'>{username}</h1>
    </main>
  );
}
