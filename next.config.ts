import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/leistungen/nodex",
        destination: "/produkte/nodex",
        permanent: true,
      },
      {
        source: "/leistungen/ki-beratung",
        destination: "/loesungen/ki-beratung",
        permanent: true,
      },
      {
        source: "/leistungen/ki-trainings",
        destination: "/loesungen/ki-trainings",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
