import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/produkte/trustarch",
        destination: "/produkte/authentictrust",
        permanent: true,
      },
      {
        source: "/leistungen/nodex",
        destination: "/produkte/nodex",
        permanent: true,
      },
      {
        source: "/leistungen/ki-beratung",
        destination: "/loesungen#beratung",
        permanent: true,
      },
      {
        source: "/leistungen/ki-trainings",
        destination: "/loesungen#schulungen",
        permanent: true,
      },
      {
        source: "/leistungen",
        destination: "/loesungen",
        permanent: true,
      },
      {
        source: "/loesungen/ki-beratung",
        destination: "/loesungen#beratung",
        permanent: true,
      },
      {
        source: "/loesungen/ki-trainings",
        destination: "/loesungen#schulungen",
        permanent: true,
      },
      {
        source: "/ki-governance",
        destination: "/loesungen#governance",
        permanent: true,
      },
      {
        source: "/ai-gateway",
        destination: "/produkte/nodex",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
