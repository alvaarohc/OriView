import UpcomingEventsSk from '@/app/components/skelletons/UpcomingEventsSk';
import Widget from '@/app/components/ui/Widget';
import UpcomingEvents from '@/app/components/UpcomingEvents';
import { Suspense } from 'react';

export default async function EventsPage() {
  return (
    <section className="flex flex-col gap-10 h-full">
      <h1 className="text-3xl font-black">Events Dashboard</h1>
      <main className="grid grid-cols-1 gap-5 h-full">
        <Suspense fallback={<UpcomingEventsSk />}>
          <UpcomingEvents />
        </Suspense>
        <Widget title="" className="flex items-center justify-center">
          <h2 className="text-3xl font-bold">Time line comming soon!</h2>
        </Widget>
      </main>
    </section>
  );
}
