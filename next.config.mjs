/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ESTO ES CLAVE para que carguen los estilos en GitHub Pages
  basePath: '/LandingPageMjm',
  assetPrefix: '/LandingPageMjm',
};

export default nextConfig;