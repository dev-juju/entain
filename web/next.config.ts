/**
 * @packageDocumentation
 * @category Config
 */

//#region imports
const nextPWA = require('next-pwa');
const { createSecureHeaders } = require('next-secure-headers');
//#endregion

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 withPWA
 *--------------------------------------------------------------------------------------------------------------------------
 *
 * Add PWA config options to Next.js config.
 * NB: We only want PWA on production deployments. Turning this on during development might have undesirable effects
 *     - if you do, remember to clear your cache if your changes are not picked up by HMR
 */
const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NEXT_PUBLIC_NODE_ENV?.toLowerCase() == 'development',
  register: true,
  skipWaiting: true,
});

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 nextConfig
 *--------------------------------------------------------------------------------------------------------------------------
 *
 * Next.js config object
 * Learn more [here](https://nextjs.org/docs/app/api-reference/next-config-js)
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: false,
  output: 'standalone',
  headers: async () => {
    return [
      {
        // Add security headers to all routes/pages
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: false,
        }),
      },
    ];
  },
  images: {
    deviceSizes: [320, 420, 770, 1024, 1200],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
    path: '/_next/image',
    loader: 'default',
  },
  i18n: {
    locales: ['en-US', 'en', 'ru', 'ru-RU', 'et'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
  eslint: {
    dirs: ['src'],
  },
  devIndicators: {
    buildActivityPosition: 'top-right',
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN,
  },
};

module.exports = withPWA(nextConfig);
