import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      <body className={geistVF.className + ' flex flex-col items-center'}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
