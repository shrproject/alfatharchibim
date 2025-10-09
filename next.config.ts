import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // Ganti dengan hostname Supabase Storage Anda
        hostname: 'dhvzunymgvadhdtfojyi.supabase.co', 
        port: '',
        // Pathname ini mengizinkan semua gambar dari semua bucket publik
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;