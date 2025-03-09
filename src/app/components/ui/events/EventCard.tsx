import { EclipseData } from '@/types/schemas.valibot';
import Link from 'next/link';

type EventCardProps = {
  title: string;
  date: string;
  bgColor?: 'bg-secondary' | 'bg-secondary-dark' | 'bg-secondary-light';
  pointer?: boolean;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void | ((eclipse: EclipseData) => void);
};

/**
 *
 * @description A card component for displaying events
 *
 * @param title The title of the event
 * @param date The date of the event
 * @param bgColor The background color of the event card
 * @param pointer Whether to show a pointer on the event card
 * @param icon Optionally the icon to display on the event card
 * @param href The href to link to (optional)
 * @param onClick The onClick event for the card (optional)
 */
export default function EventCard({
  title,
  date,
  bgColor,
  pointer = true,
  icon,
  href,
  onClick,
}: EventCardProps) {
  // If it has a href, use a Link component, otherwise use a div
  {
    return href ? (
      <Link
        href={href}
        className={`shadow-card relative bg-primary ${bgColor} flex justify-between items-center p-10 rounded-lg event-card`}
        onClick={onClick}
      >
        {pointer && (
          <span className="absolute bg-accent-dark -top-1.5 -right-1.5 w-5 h-5 rounded-full before:content-[''] before:w-5 before:h-5 before:bg-accent-dark before:absolute before:rounded-full before:animate-ping"></span>
        )}
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{date}</p>
        </div>
        <div>{icon}</div>
      </Link>
    ) : (
      <div
        className={`shadow-card relative bg-primary ${bgColor} flex justify-between items-center p-10 rounded-lg event-card`}
      >
        {pointer && (
          <span className="absolute bg-accent-dark -top-1.5 -right-1.5 w-5 h-5 rounded-full before:content-[''] before:w-5 before:h-5 before:bg-accent-dark before:absolute before:rounded-full before:animate-ping"></span>
        )}
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{date}</p>
        </div>
        <div>{icon}</div>
      </div>
    );
  }
}
