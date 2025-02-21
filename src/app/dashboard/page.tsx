import { getUser } from '@/actions/user';
import { redirect } from 'next/navigation';
import UnderConstructionMessage from '../components/ui/UnderConstruction';

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect('/signin');
  }

  return (
    <section className="flex flex-col items-center justify-center h-full">
      {/* Change for user name */}
      {/* <h1 className="text-3xl font-bold">Welcome, {user.email}.</h1> */}
      <UnderConstructionMessage />
    </section>
  );
}
