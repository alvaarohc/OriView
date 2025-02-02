import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type LinkT = {
  name: string;
  href: string;
};

export default function Header() {
  const links: LinkT[] = [
    { name: 'Features', href: '/features' },
    { name: 'Events', href: '/events' },
    { name: 'Community (soon)', href: '/community' },
  ];

  return (
    <header className="flex justify-between items-center bg-secondary-dark p-6">
      <div className="flex items-center gap-3">
        <Image
          className="rounded-lg"
          src="oriview-logo.svg"
          alt="OriView Logo"
          width={50}
          height={50}
        />
        <h1 className="text-2xl font-black text-text">OriView</h1>
      </div>

      <nav className="flex gap-4 items-center ">
        {links.map((link) => (
          <Link
            className={`font-semibold text-text ${clsx({
              'line-through text-text/40': link.href === '/community',
            })}`}
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
