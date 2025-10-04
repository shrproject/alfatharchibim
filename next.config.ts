import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // Pastikan Anda menggunakan hostname yang benar. Dari error Anda, hostname-nya adalah:
        hostname: 'i.ibb.co.com', 
        port: '',
        pathname: '/**',
      },
      // Anda bisa menambahkan hostname lain di sini jika diperlukan
    ],
  },
};

export default nextConfig;
