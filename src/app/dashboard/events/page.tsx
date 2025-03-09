import Widget from '@/app/components/ui/Widget';
import { getUpcomingEclipses } from '@/app/api/services/eventsService';
import { IconArrowUpRight } from '@tabler/icons-react';
import Link from 'next/link';
import EventWraper from '@/app/components/ui/events/EventWraper';

export default async function EventsPage() {
  const eclipseResults = await getUpcomingEclipses(2026);

  const headerBtn = (
    <Link
      href="/dashboard/events/upcoming-events"
      className="px-3 py-0.5 text-lg bg-accent text-secondary font-bold rounded-lg flex justify-between items-center gap-2 shadow-btn hover:shadow-btn-hover hover:bg-accent-dark transition-all duration-400"
    >
      Detail View
      <IconArrowUpRight size={20} stroke={2.5} />
    </Link>
  );

  return (
    <section className="flex flex-col gap-10 h-full">
      <h1 className="text-3xl font-black">Events Dashboard</h1>
      <main className="grid grid-cols-1 gap-5 h-full">
        <Widget title="Upcoming Events" headerBtn={headerBtn}>
          <div className="flex flex-col gap-5 card-container">
            <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
              {eclipseResults &&
                eclipseResults.map(
                  (
                    eclipse // TODO - Add valibot validation for eclipseResults
                  ) => (
                    <EventWraper
                      key={eclipse.catalog_number}
                      eclipse={eclipse}
                    />
                  )
                )}
            </div>
          </div>
        </Widget>
        <Widget title="" className="flex items-center justify-center">
          <h2 className="text-3xl font-bold">Time line comming soon!</h2>
        </Widget>
      </main>
    </section>
  );
}
