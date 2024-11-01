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
            },
            {
                protocol: 'https',
                hostname: 's3-alpha-sig.figma.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sportmonks.com',
            },
        ],
    },
};

export default nextConfig;
