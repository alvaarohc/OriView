import Widget from '@/app/components/ui/Widget';
import { getUpcomingEclipses } from '@/app/api/services/eventsService';
import EventCard from '@/app/components/ui/EventCard';
import { IconArrowUpRight } from '@tabler/icons-react';
import Link from 'next/link';

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
            <div
              id="eclipse-cards"
              className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
            >
              {eclipseResults && eclipseResults.map(
                (
                  eclipse // TODO - Add valibot validation for eclipseResults
                ) => (
                  <EventCard
                    key={eclipse.catalog_number}
                    title={eclipse.ecl_type}
                    date={`${eclipse.calendar_month} ${eclipse.calendar_day}, ${eclipse.calendar_year}`}
                    bgColor="bg-secondary"
                    pointer={false}
                    icon={<IconArrowUpRight size={40} />}
                    href={`/dashboard/events/${eclipse.catalog_number}`}
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
