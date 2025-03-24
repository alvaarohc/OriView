'use client';

import Link from 'next/link';
import {
  IconCalendarClock,
  IconChevronRight,
  IconLayoutSidebarLeftCollapseFilled,
  IconPlanet,
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { logout } from '@/actions/user';

export default function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const links = [
    {
      href: '/dashboard/events',
      name: 'Events',
      icon: <IconCalendarClock size={28} />,
    },
    {
      href: '/dashboard/bodies',
      name: 'Bodies',
      icon: <IconPlanet size={28} />,
    },
  ];

  /*
   * Link classes are into variables to make the file more readable.
   */
  const activeLinkClass = `bg-accent-dark/30 font-bold before:content-[''] before:block before:absolute before:bg-accent-dark
     before:h-full before:w-2 before:top-0 before:left-0 before:rounded-e-sm`;
  const linkClass = 'flex justify-between p-3 text-lg relative';

  return (
    <div className="flex h-screen w-screen">
      <header className="flex flex-col justify-between bg-secondary-dark ">
        <div>
          <div className="flex items-center gap-10 p-10">
            <Link href="/dashboard" className="text-3xl font-black">
              Dashboard
            </Link>
            <button type="button" className="cursor-pointer">
              <IconLayoutSidebarLeftCollapseFilled size={36} />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${clsx(
                  link.href.split('/')[2] === path.split('/')[2] &&
                    activeLinkClass
                )} ${linkClass}`}
              >
                <div className="flex gap-2 items-center">
                  {link.icon}
                  <p>{link.name}</p>
                </div>
                <IconChevronRight
                  size={28}
                  className={`transition-transform duration-300 ${clsx(
                    link.href.split('/')[2] === path.split('/')[2] &&
                      'rotate-180'
                  )}`}
                />
              </Link>
            ))}
          </nav>
        </div>
        <button
          className="bg-primary text-xl font-bold hover:bg-red-500 transition-all duration-250 p-2 cursor-pointer"
          type="button"
          onClick={logout}
        >
          Log out
        </button>
      </header>
      <main className="h-screen w-full p-10">{children}</main>
    </div>
  );
}
