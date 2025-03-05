import UnderConstructionMessage from '@/app/components/ui/UnderConstruction';

export default function EventsPage() {
  return (
    <section className="flex flex-col gap-10 h-full">
      <h1 className="text-3xl font-black">Events Dashboard</h1>
      <main className="grid grid-cols-2 gap-5 h-full">
        <div className="bg-secondary-light text-primary">
          <h2>Up comming events</h2>
        </div>
        <div className="bg-secondary-light text-primary">
          <h2>Calendar</h2>
        </div>
        <div className="bg-secondary-light text-primary col-span-2">
          <h2>Time line comming soon!</h2>
        </div>
      </main>
    </section>
  );
}
