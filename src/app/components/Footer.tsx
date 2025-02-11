import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const linkGroups = [
    {
      title: 'Quick links',
      links: [
        {
          name: 'Sign up',
          href: '/signup',
        },
        {
          name: 'Events',
          href: '#events',
        },
        {
          name: 'FAQ (soon)',
          href: '/faq',
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          name: 'FAQ',
          href: '/faq',
        },
      ],
    },
  ];

  return (
    <footer className="flex lg:flex-row flex-col lg:gap-0 gap-15 justify-evenly items-center bg-secondary-dark px-20 py-30 relative">
      <span className="bg-accent-dark rounded-[50%] blur-2xl -z-10 w-full h-full absolute top-0 right-0"></span>
      <article className="flex flex-col gap-1 text-center">
        <div className="flex justify-center gap-2">
          <Image
            className="rounded-lg"
            src="/oriview-logo.svg"
            alt="OriView logo"
            width={26}
            height={26}
          />
          <h1 className="font-black text-lg">OriView</h1>
        </div>
        <p>Into the stars.</p>
        <p className="text-text/75">© 2025 Oriview. All rights reserved.</p>
      </article>
      <article className="flex gap-35">
        {/*
         * Iterates over the `linkGroups` array to dynamically generate
         * the link sections in the footer
         */}
        {linkGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">{group.title}</h2>
            <ul className=" list-none flex flex-col gap-2">
              {group.links.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </article>
    </footer>
  );
}
