/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Sample websites are plain HTML in public/samples/<name>/index.html.
  // This serves them at the short address /samples/<name>.
  async rewrites() {
    return [
      { source: "/samples/:name", destination: "/samples/:name/index.html" },
      // Client previews, shared by link only (noindex, not linked from the site).
      { source: "/clients/:name", destination: "/clients/:name/index.html" },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
