/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#4C6851',
				primHover: '#648862',
				darkPrimary: '#334B3E', // light primary
				seaGreen: '#19211a', // #2B2D2C
				secondary: '#304033', // dark  '#2B2D2C'
				darkSecondary: '#648862',
				light: '#DDC6A7',
				dark: '#19211a', // dark  '#1A1A1A'
				delete: '#a81111',
				fall: '#B83A2E',
				tangerine: '#d14234',
				marine: '#012f47',
				night: '#111417',
				/* 	concrete: '#cef2e4', */
				sun: '#F7B761',
				vegetarian: '#7aa600',
				vegan: '#8CA064',
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
