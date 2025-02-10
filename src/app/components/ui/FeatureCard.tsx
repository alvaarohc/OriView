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
    <div className="flex justify-center flex-col gap-2 bg-secondary-dark px-14 py-5 rounded-lg max-w-100 xs:h-65 h-80">
      {icon}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
