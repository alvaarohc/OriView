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
    <header className="flex justify-between items-center py-4 px-10.5">
      <div className="absolute w-65 h-65 bg-secondary-light rounded-full blur-2xl -right-15 -top-30 -z-10"></div>
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

      <button className="bg-accent hover:bg-accent-dark text-secondary font-black px-4 py-2 transition-all duration-250 rounded-lg">
        Sign up
      </button>
    </header>
  );
}
