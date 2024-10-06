/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'icons.iconarchive.com',
            },
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
            }
        ],
    },
};

export default nextConfig;
