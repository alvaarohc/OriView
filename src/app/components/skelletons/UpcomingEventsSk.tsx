import EventCard from '../ui/events/EventCard';
import Widget from '../ui/Widget';

export default function UpcomingEventsSk() {
  const date = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Widget title="Upcoming Events">
      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        <EventCard
          title="Loading event..."
          date={date}
          isSkeleton={true}
          pointer={false}
          bgColor="bg-secondary"
        />
        <EventCard
          title="Loading event..."
          date={date}
          isSkeleton={true}
          pointer={false}
          bgColor="bg-secondary"
        />
        <EventCard
          title="Loading event..."
          date={date}
          isSkeleton={true}
          pointer={false}
          bgColor="bg-secondary"
        />
        <EventCard
          title="Loading event..."
          date={date}
          isSkeleton={true}
          pointer={false}
          bgColor="bg-secondary"
        />
      </div>
    </Widget>
  );
}
