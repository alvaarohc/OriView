import EventCard from './ui/EventCard';

type EventT = {
  title: string;
  date: string;
};

export default function CurrentEvents() {
  const events = [
    {
      title: 'Total Solar Eclipse',
      date: 'April 12, 2025',
    },
    {
      title: 'Total Lunar Eclipse',
      date: 'July 17, 2025',
    },
    {
      title: 'Perseid Meteor Shower',
      date: 'August 11, 2025',
    },
  ];

  return (
    <section className="relative bg-secondary-dark flex flex-col items-center gap-10 p-25 mb-50">
        <div className='bg-accent-dark rounded-[50%] blur-2xl -z-10 w-full h-full absolute top-0'></div>
      <h2 className="text-4xl font-bold">Current Events</h2>
      <div className="flex gap-10">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </section>
  );
}
