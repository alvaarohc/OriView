'use client';

import { EclipseData } from '@/types/schemas.valibot';
import EventCard from './EventCard';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useEclipseStore } from '@/app/stores/eclipseStore';

type EventWraperProps = {
  eclipse: EclipseData;
};

/**
 * EventWraper recieves the event data and renders the event card.
 */
export default function EventWraper({ eclipse }: EventWraperProps) {
  const { setSelectedEclipse } = useEclipseStore();

  return (
    <EventCard
      key={eclipse.catalog_number}
      title={eclipse.ecl_type}
      date={`${eclipse.calendar_month} ${eclipse.calendar_day}, ${eclipse.calendar_year}`}
      bgColor="bg-secondary"
      pointer={false}
      icon={<IconArrowUpRight size={40} />}
      href={`/dashboard/events/${eclipse.catalog_number}`}
      onClick={() => setSelectedEclipse(eclipse)}
    />
  );
}
