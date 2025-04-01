'use client';

import Link from '@/app/components/ui/Link';
import { useUserStore } from '@/app/stores/userStore';
import { useEffect } from 'react';

interface DashboardUIProps {
  initialUsername: string;
}

export default function DashboardUI({ initialUsername }: DashboardUIProps) {
  const { setUsername, username } = useUserStore();

  useEffect(() => {
    setUsername(initialUsername);
  }, [initialUsername, setUsername]);

  const navLinks = [
    {
      href: '/dashboard/events',
      name: 'Events',
    },
    {
      href: '/dashboard/bodies',
      name: 'Bodies',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-5 h-full">
      <div className="flex justify-between gap-10">
        <h1 className="text-3xl font-bold">Welcome, {username}</h1>
      </div>
      <div className="flex bg-primary py-7 px-10 justify-between w-[80%] rounded-full hover:inset-shadow-blur transition-all duration-450">
        <h2 className="text-2xl font-bold">Jump right in: </h2>
        <nav className="flex gap-12">
          {navLinks.map((link) => (
            <Link className="text-2xl" key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
