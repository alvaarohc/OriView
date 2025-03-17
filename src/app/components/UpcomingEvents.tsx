import EventWraper from '@/app/components/ui/events/EventWraper';
import { getUpcomingEclipses } from '@/app/api/services/eventsService';
import Widget from '@/app/components/ui/Widget';

export default async function UpcomingEvents() {
  const eclipseResults = await getUpcomingEclipses(2026);

  return (
    <Widget title="Upcoming Events">
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
