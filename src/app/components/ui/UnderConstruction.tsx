import { IconBarrierBlockFilled } from '@tabler/icons-react';
import Link from 'next/link';

export default function UnderConstructionMessage() {
  return (
    <article className="flex flex-col gap-5 items-center">
      <div className="flex gap-5 items-center justify-center bg-red-500 p-4 rounded-xl">
        <IconBarrierBlockFilled size={50} />
        <h1 className="text-2xl text-center font-bold">
          It seems like this page is under constuction!
        </h1>
      </div>
      <Link
        className="bg-accent py-3 px-6 rounded-lg text-secondary font-bold hover:bg-accent-dark transition-colors duration-300"
        href="/dashboard"
      >
        Go back
      </Link>
    </article>
  );
}
