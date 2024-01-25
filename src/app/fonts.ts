import { Roboto_Mono, Source_Sans_3 } from 'next/font/google';

export const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  weight: ['100', '200', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

export const source_sans = Source_Sans_3({
  variable: '--font-source-sans-3',
  weight: ['200', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
});