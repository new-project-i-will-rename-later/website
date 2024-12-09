import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistVF = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'RenameLater',
  description: 'Landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistVF.className + 'flex h-full w-full flex-col'}>{children}</body>
    </html>
  );
}
