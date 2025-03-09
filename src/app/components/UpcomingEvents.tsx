import EventWraper from '@/app/components/ui/events/EventWraper';
import { getUpcomingEclipses } from '@/app/api/services/eventsService';
import { IconArrowUpRight } from '@tabler/icons-react';
import Widget from '@/app/components/ui/Widget';
import Link from 'next/link';

export default async function UpcomingEvents() {
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
    <Widget title="Upcoming Events" headerBtn={headerBtn}>
      <div className="flex flex-col gap-5 card-container">
        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {eclipseResults &&
            eclipseResults.map((eclipse) => (
              <EventWraper key={eclipse.catalog_number} eclipse={eclipse} />
            ))}
        </div>
      </div>
    </Widget>
  );
}
