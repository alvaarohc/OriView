import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EndureInsight - Data-Driven Insights for Athletes.",
  description: "Data-Driven Insights for Athletes.",
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
      </body>
    </html>
  );
}
