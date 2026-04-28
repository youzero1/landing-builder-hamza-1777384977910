import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Velocity — Ship Faster, Scale Smarter',
  description: 'The modern platform that helps teams build, deploy, and scale their products with unprecedented speed.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
