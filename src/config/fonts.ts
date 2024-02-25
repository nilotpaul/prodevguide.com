import { Open_Sans, Fira_Code, Inter } from 'next/font/google';

export const heading = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-heading',
});

export const paragraph = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '300', '800', '100', '200', '900'],
  display: 'swap',
  variable: '--font-paragraph',
});

export const code = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '300'],
  display: 'swap',
  variable: '--font-code',
});
