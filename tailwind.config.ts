import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xxs:'350px',
				xs: '450px',
				max: '2200px',
			},
		
			colors: {
				primary: {
					'200': '#ffffff',
					'400': '#f7f7f7',
					'600': '#efefef',
					'700':"#e8e8e8",
					'800': '#bababa',
				},
				secondary: {
					200: '#b5453f',
					400: '#ae2024',
				},
				text: '#4E4B66',
				heading: '#000000',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config
