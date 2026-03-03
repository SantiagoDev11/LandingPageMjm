/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Solo aplica el path si estamos en producción (subiendo a GitHub)
  basePath: isProd ? '/LandingPageMjm' : '',
  assetPrefix: isProd ? '/LandingPageMjm' : '',
};

export default nextConfig;