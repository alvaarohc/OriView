type EventCardProps = {
  title: string;
  date: string;
};

export default function EventCard({ title, date }: EventCardProps) {
  return (
    <div className="bg-primary flex flex-col max-w-90 justify-center p-10 rounded-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{date}</p>
    </div>
  );
}
