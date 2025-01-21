/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
		],
	},
	async rewrites() {
		return [
			{
				source: '/galeria',
				destination: '/gallery',
			},
			{
				source: '/aktualnosci',
				destination: '/blog',
			},
			{
				source: '/aktualnosci/:slug*',
				destination: '/blog/:slug*',
			},
		]
	},
}

export default nextConfig
