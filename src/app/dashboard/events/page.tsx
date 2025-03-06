import UnderConstructionMessage from '@/app/components/ui/UnderConstruction';
import Widget from '@/app/components/ui/Widget';

export default function EventsPage() {
  return (
    <section className="flex flex-col gap-10 h-full">
      <h1 className="text-3xl font-black">Events Dashboard</h1>
      <main className="grid grid-cols-2 gap-5 h-full">
        <Widget title="Upcoming Events" />
        <Widget title="Calendar" />
        <Widget title="Time line comming soon!" className='col-span-2'/>
      </main>
    </section>
  );
}
