import type { Metadata } from 'next';
import './globals.css';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'OriView - Into the Stars',
  description: 'Discover, track, and share astronomical events.',
  icons: {
    icon: '/icons/icon-graphic.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
