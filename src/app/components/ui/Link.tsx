import NextLink from 'next/link';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const hoverEffect = `relative pb-px before:content-[''] before:absolute before:bottom-0
   before:block before:bg-text before:h-0.5 before:w-full before:scale-x-0 
   hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300`;

export default function Link({ children, href, className }: LinkProps) {
  return (
    <NextLink className={`${hoverEffect} pb-2 ${className}`} href={href}>
      {children}
    </NextLink>
  );
}
