import {
  IconCalendarEvent,
  IconTelescope,
  IconUsers,
} from '@tabler/icons-react';
import FeatureCard from './ui/FeatureCard';

type FeatureT = {
  title: string;
  description: string;
  icon: React.JSX.Element;
};

export default function Features() {
  const ICON_SIZE = 44;
  const features: FeatureT[] = [
    {
      title: 'Event Discovery',
      description:
        'Explore a curated calendar of upcoming astronomical events.',
      icon: <IconTelescope size={ICON_SIZE} />,
    },
    {
      title: 'Observation Logging',
      description:
        'Record your observations and share them with the community.',
      icon: <IconCalendarEvent size={ICON_SIZE} />,
    },
    {
      title: 'Community Interaction (soon)',
      description:
        'Connect with fellow astronomy enthusiasts and share experiences',
      icon: <IconUsers size={ICON_SIZE} />,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-6 px-18 mb-50">
      <h2 className="text-4xl font-bold">Key features</h2>
      <div className="flex gap-5 justify-center items-center">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
