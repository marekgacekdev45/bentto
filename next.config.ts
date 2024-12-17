/** @type {import('next').NextConfig} */
const nextConfig = {
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
				source: '/aktualnosci/:slug*', 
				destination: '/blog/:slug*',
			},
		]
	},
	async redirects() {
		return [
			{
				source: '/gallery',
				destination: '/galeria',
				permanent: true,
			},
			{
				source: '/blog/:slug*', 
				destination: '/aktualnosci/:slug*', 
				permanent: true,
			},
		]
	},
}

export default nextConfig
