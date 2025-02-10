type EventCardProps = {
  title: string;
  date: string;
};

export default function EventCard({ title, date }: EventCardProps) {
  return (
    <div className="relative bg-primary flex flex-col justify-center p-10 rounded-lg">
      <span className="absolute bg-accent-dark -top-1.5 -right-1.5 w-5 h-5 rounded-full before:content-[''] before:w-5 before:h-5 before:bg-accent-dark before:absolute before:rounded-full before:animate-ping"></span>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{date}</p>
    </div>
  );
}
