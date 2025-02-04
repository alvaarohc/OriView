import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OriView - Into the Stars',
  description: 'Discover, track, and share astronomical events.',
  icons: {
    icon: '/oriview-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='overflow-hidden'>{children}</body>
    </html>
  );
}
