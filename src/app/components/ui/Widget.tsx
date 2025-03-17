type WidgetProps = {
  title: string;
  className?: string;
  children?: React.ReactNode;
  headerBtn?: React.ReactNode;
};

/**
 *
 * @param title - The title of the widget
 * @param className - Custom styles for the widget (optional)
 * @param children - Content for the widget (optional)
 * @param headerBtn - Add a button to the widget header (optional)
 */
export default async function Widget({
  title,
  className,
  children,
}: WidgetProps) {
  return (
    <div className={`bg-secondary-lighter rounded-lg p-8 ${className}`}>
      <header className="mb-8">
        <h2 className="font-bold text-2xl text-primary">{title}</h2>
      </header>
      {children} {/* Custom content for the widget renders here */}
    </div>
  );
}
