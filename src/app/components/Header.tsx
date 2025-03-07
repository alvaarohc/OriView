import clsx from 'clsx';
import Image from 'next/image';
import Link from '@/app/components/ui/Link';
import NextLink from 'next/link';

type LinkT = {
  name: string;
  href: string;
};

export default function Header() {
  const links: LinkT[] = [
    { name: 'Features', href: '/features' },
    { name: 'Events', href: '/dashboard/events' },
    { name: 'Community (soon)', href: '/community' },
  ];

  return (
    <header className="flex lg:flex-row lg:gap-0 gap-8 flex-col justify-between items-center py-4 px-10.5">
      <div className="flex items-center gap-3">
        <Image
          className="rounded-lg"
          src="oriview-logo.svg"
          alt="OriView Logo"
          width={50}
          height={50}
        />
        <h1 className="text-2xl font-black">OriView</h1>
      </div>

      <nav className="flex gap-5 items-center link-container">
        {links.map((link) => (
          <Link
            className={`link-effect font-semibold ${clsx({
              'line-through text-text/40': link.href === '/community',
            })}`}
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <NextLink href='/signup' className="bg-accent hover:bg-accent-dark text-secondary font-black px-4 py-2 transition-all duration-250 rounded-lg cursor-pointer">
        Sign up
      </NextLink>
    </header>
  );
}
