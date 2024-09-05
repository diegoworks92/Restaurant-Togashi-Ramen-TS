/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#3E8C6F',
				primHover: '#429677',
				darkPrimary: '#2c634f',
				seaGreen: '#1f4739',
				secondary: '#262837',
				light: '#F2F2F2',
				dark: '#1F1D2B',
				delete: '#a81111',
				fall: '#C15B1C',
				tangerine: '#FF6F03',
				marine: '#012f47',
				night: '#111417',
				concrete: '#cef2e4',
				sun: '#F7B761',
				vegetarian: '#7aa600',
				vegan: '#01472c',
			},
			fontFamily: {
				PermanentMarker: ['Permanent Marker'],
				Inter: ['Inter'],
				Nunito: ['Nunito'],
			},
			textShadow: {
				default: '0px 0px 6px rgba(255, 255, 255, 1)',
			},
		},
	},
	variants: {
		extend: {
			textShadow: ['responsive'],
		},
	},
	plugins: [require('tailwindcss-textshadow')],
};
