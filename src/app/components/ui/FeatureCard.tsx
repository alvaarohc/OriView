type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.JSX.Element;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-2 bg-secondary-dark p-11 rounded-lg">
      {icon}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
