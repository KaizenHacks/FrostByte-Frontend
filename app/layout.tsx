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
  title: 'FROSTBYTE 2026 — by KaizenHacks',
  description:
    'FROSTBYTE by KaizenHacks is an immersive 3-day winter hackathon uniting developers to build web-based solutions through modern web development and agentic engineering.',
  keywords: [
    'FROSTBYTE',
    'FROSTBYTE 2026',
    'KaizenHacks',
    'FROSTBYTE by KaizenHacks',
    'web development hackathon',
    'agentic engineering',
    'hackathon',
    'student hackathon',
    'winter hackathon',
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
    title: 'FROSTBYTE 2026 — by KaizenHacks',
    description:
      'Build web-based solutions through modern web development and agentic engineering. A 3-day winter hackathon organized by KaizenHacks.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FROSTBYTE by KaizenHacks',
    images: [
      {
        url: '/logo/frostbyte_p5_transparent.png',
        width: 1400,
        height: 1296,
        alt: 'FROSTBYTE by KaizenHacks Emblem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FROSTBYTE 2026 — by KaizenHacks',
    description:
      'Build web-based solutions through modern web development and agentic engineering. A 3-day winter hackathon organized by KaizenHacks.',
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
      className={`${pressStart2P.variable} ${pixelifySans.variable} ${geistSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#171F2D] text-[#F5F7FA] font-sans selection:bg-[#6D9EFF]/30 selection:text-[#F5F7FA]">
        <SiteLoaderCover />
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}
