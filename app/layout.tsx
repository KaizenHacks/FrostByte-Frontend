import type { Metadata, Viewport } from 'next';
import { Press_Start_2P, Pixelify_Sans, Geist } from 'next/font/google';
import './globals.css';
import SiteLoaderCover from '@/components/SiteLoaderCover';
import SiteLoader from '@/components/SiteLoader';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://frostbyte.tech'),
  title: 'Frostbyte',
  description:
    'Frostbyte is a 24-hour winter student hackathon in Delhi, India. An immersive retro pixel-art technology adventure bringing developers, designers and innovators together.',
  keywords: [
    'Frostbyte',
    'hackathon',
    'student hackathon',
    'winter hackathon',
    'Delhi hackathon',
    'pixel art',
    'coding festival',
    'technology',
    'innovation',
  ],
  icons: {
    icon: '/logo/frostbyte_p5_transparent.png',
    shortcut: '/logo/frostbyte_p5_transparent.png',
    apple: '/logo/frostbyte_p5_transparent.png',
  },
  openGraph: {
    title: 'Frostbyte',
    description:
      'A 24-hour winter student hackathon in Delhi, India. Experience an immersive pixel-art winter adventure.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Frostbyte',
    images: [
      {
        url: '/logo/frostbyte_p5_transparent.png',
        width: 1400,
        height: 1296,
        alt: 'FROSTBYTE Emblem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frostbyte',
    description:
      'A 24-hour winter student hackathon in Delhi, India.',
    images: ['/logo/frostbyte_p5_transparent.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#171F2D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${pressStart2P.variable} ${pixelifySans.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#171F2D] text-[#F5F7FA] font-sans selection:bg-[#6D9EFF]/30 selection:text-[#F5F7FA]">
        <SiteLoaderCover />
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}
