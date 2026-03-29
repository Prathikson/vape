/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },

  // ✅ Skip ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Skip TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Optional: reduce strictness (helps in some edge cases)
  reactStrictMode: false,

  // ✅ Optional: ignore build-time static optimization issues
  experimental: {
    // Helps avoid some app router build edge cases
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;