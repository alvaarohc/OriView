'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import { useEclipseStore } from '@/app/stores/eclipseStore';

type EventPageProps = {
  params: Promise<{ id: string }>;
};

export default function EventPage({ params }: EventPageProps) {
  const { selectedEclipse } = useEclipseStore();

  /*
   * Calculate "Universal time"
   * (Terrestrial Dynamical Time + Delta time)
   */
  const [hours, minutes, seconds] = selectedEclipse!.td_of_greatest_eclipse[0]
    .split(':')
    .map(Number);
  const universalTime = new Date();
  universalTime.setHours(hours, minutes, seconds + selectedEclipse!.dt_s);

  return selectedEclipse ? (
    <section className="h-full flex justify-center flex-col gap-4">
      <Breadcrumb />
      <h1 className="font-black text-4xl">{selectedEclipse?.ecl_type}</h1>
      <article className="flex flex-col gap-2 bg-secondary-lighter text-primary text-2xl p-10 rounded-lg">
        <p>
          <span className="font-bold">Date: </span>
          {`${selectedEclipse.calendar_month} ${selectedEclipse.calendar_day}, ${selectedEclipse.calendar_year}`}
        </p>
        <p>
          <span className="font-bold">Eclipse Terrestrial Dynamical Time:</span>{' '}
          {selectedEclipse.td_of_greatest_eclipse}
        </p>
        <p>
          <span className="font-bold">Delta time: </span>
          {selectedEclipse.dt_s}
        </p>
        <p>
          <span className="font-bold">Universal Time: </span>
          {universalTime.toTimeString().split(' ')[0]}{' '}
        </p>
        <p>
          <span className="font-bold">Saros: </span>
          {selectedEclipse.saros_num}
        </p>
        <p>
          <span className="font-bold">Magnitude: </span>
          {`${selectedEclipse.ecl_mag.toFixed(3)} (${
            parseFloat(selectedEclipse!.ecl_mag.toFixed(3)) * 100
          }%)`}
        </p>
      </article>
    </section>
  ) : (
    <p>No data available!</p>
  );
}
