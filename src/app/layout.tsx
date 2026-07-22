import type { Metadata } from 'next';
import { Playfair_Display, Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yuliia Nazymko — Fullstack Developer',
  description:
    'Portfolio of Yuliia Nazymko, a fullstack developer building modern, user-friendly web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${spaceGrotesk.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
