import UnderConstructionMessage from '@/app/components/ui/UnderConstruction';

type EventPageProps = {
  params: Promise<{ id: string }>;
};

export default function EventPage({ params }: EventPageProps) {
  return <UnderConstructionMessage />;
}
