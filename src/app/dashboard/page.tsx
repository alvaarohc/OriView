import { getUser } from '@/actions/user';
import { redirect } from 'next/navigation';
import UnderConstructionMessage from '../components/ui/UnderConstruction';
import Link from '../components/ui/Link';

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect('/signin');
  }

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
      {/* Change for user name */}
      <h1 className="text-3xl font-bold">Welcome, {user.email}.</h1>
      <div className="flex bg-primary py-7 px-10 justify-between w-[80%] rounded-full hover:inset-shadow-blur transition-all duration-450">
        <h2 className="text-2xl font-bold">Jump right in: </h2>
        <nav className="flex gap-12">
          {navLinks.map((link) => (
            <Link
              className="text-2xl"
              key={link.href}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
