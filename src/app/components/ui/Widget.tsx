import getUpcomingEclipses from '@/app/api/services/eventsService';

type WidgetProps = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};

export default async function Widget({
  title,
  className,
  children,
}: WidgetProps) {
  getUpcomingEclipses(2026);
  
  return (
    <div
      className={`bg-secondary-lighter text-primary rounded-lg p-4 ${className}`}
    >
      <h2 className="font-bold text-xl">{title}</h2>
      {children} {/* Custom content for the widget renders here */}
    </div>
  );
}
