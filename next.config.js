/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
    localeDetection: false
  }
};

module.exports = nextConfig;

