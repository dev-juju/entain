/* eslint-disable no-restricted-imports */
/**
 * @packageDocumentation
 * @category Layout
 */

//#region imports
import './globals.css';

import Providers from 'Entain/app/providers';
import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
//#endregion

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  keywords: process.env.NEXT_PUBLIC_KEYWORDS,
  authors: [{ name: process.env.NEXT_PUBLIC_AUTHOR, url: 'https://bomdisoft.com' }],
  manifest: '/manifest.json',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/favicon.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    title: process.env.NEXT_PUBLIC_APP_NAME,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_URL,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    locale: 'en_US',
    type: 'website',
    images: [`${ process.env.NEXT_PUBLIC_URL }/logo.png`],
  },
  appleWebApp: true,
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
   return (
     <html lang='en' dir='ltr'>
       <body>
        <script async src='https://unpkg.com/pwacompat' crossOrigin='anonymous' />
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Providers>
          { children }
        </Providers>
       </body>
     </html>
   );
 };

 export default RootLayout;
