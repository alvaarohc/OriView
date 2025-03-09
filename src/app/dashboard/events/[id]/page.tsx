'use client';

import { useEclipseStore } from '@/app/stores/eclipseStore';

type EventPageProps = {
  params: Promise<{ id: string }>;
};

export default function EventPage({ params }: EventPageProps) {
  const { selectedEclipse } = useEclipseStore();

  return selectedEclipse ? (
    <h1>{selectedEclipse?.ecl_type}</h1>
  ) : (
    <p>No data available!</p>
  );
}
