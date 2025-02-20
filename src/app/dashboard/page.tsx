import { getUser } from '@/actions/user';

export default async function Page() {
  const user = await getUser();

  return (
    <section className='p-10'>
      <p>events here!</p>
    </section>
  );
}
