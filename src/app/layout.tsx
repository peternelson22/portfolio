import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Portfolio - Nelson',
  description: 'A Personal Portfolio of Nelson tanko',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
