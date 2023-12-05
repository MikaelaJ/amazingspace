/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
			center: true
		},
		extend: {
			fontFamily: {
					body: ['Open Sans', ...defaultTheme.fontFamily.sans],
					display: ['Work Sans', ...defaultTheme.fontFamily.sans],
					sans: ['Open Sans', 'system-ui', ...defaultTheme.fontFamily.sans],
					serif: ['Bodoni Moda', ...defaultTheme.fontFamily.sans]
				
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: {
					// 3 Shades os grey
					ybs: {
						lighter: '#D9D5D2',
						DEFAULT: '#8C8987',
						darker: '#595857'
					}
				},				
				secondary: {
					// ?
					ybs: {
						lighter: '#D8EEE4',
						DEFAULT: '#F2F1F0',
						darker: '#97CEB6'
					}
				},				
				black: {
					// Black
					ybs: {
						lighter: '#4d4c4e',
						DEFAULT: '#323133',
						darker: '#0c0c0d'
					}
				},				
				lightgrey: {
					// Light grey
					ybs: {
						lighter: '#FFFFFF',
						DEFAULT: '#F2F2F2',
						darker: '#C6C6C5'
					}
				},				
			}
		}
  },
  plugins: [],
}

