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
        source: "/leistungen/nodex",
        destination: "/produkte/nodex",
        permanent: true,
      },
      {
        source: "/leistungen/ki-beratung",
        destination: "/loesungen/ki-beratung-automotive",
        permanent: true,
      },
      {
        source: "/leistungen/ki-trainings",
        destination: "/loesungen/ki-schulungen-automotive",
        permanent: true,
      },
      {
        source: "/leistungen",
        destination: "/automotive",
        permanent: true,
      },
      {
        source: "/loesungen",
        destination: "/automotive",
        permanent: true,
      },
      {
        source: "/loesungen/ki-beratung",
        destination: "/loesungen/ki-beratung-automotive",
        permanent: true,
      },
      {
        source: "/loesungen/ki-trainings",
        destination: "/loesungen/ki-schulungen-automotive",
        permanent: true,
      },
      {
        source: "/ki-governance",
        destination: "/ki-governance-automotive",
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
