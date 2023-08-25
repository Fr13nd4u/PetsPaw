/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['cdn2.thecatapi.com', 'en.wikipedia.org', 'cfa.org', '28.media.tumblr.com', '24.media.tumblr.com', 'cdn1.theimageapi.com', '25.media.tumblr.com'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
