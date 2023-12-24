/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'oiczceqgsyrgmgtjhbqi.supabase.co',
          port: '', // Leave empty for default ports
          pathname: '/storage/**', // Optional: Specify a path prefix for images
        },
      ],
    },
  };
  
  module.exports = nextConfig;