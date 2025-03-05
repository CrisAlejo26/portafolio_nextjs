import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(0, 0%, 100%)', // #ffffff
				foreground: 'hsl(0, 0%, 10%)', // #1a1a1a
				card: {
					DEFAULT: 'hsl(0, 0%, 100%)', // #ffffff
					foreground: 'hsl(0, 0%, 10%)', // #1a1a1a
				},
				popover: {
					DEFAULT: 'hsl(0, 0%, 100%)', // #ffffff
					foreground: 'hsl(0, 0%, 10%)', // #1a1a1a
				},
				primary: {
					DEFAULT: 'hsl(261, 87%, 62%)', // #844ef2
					foreground: 'hsl(276, 96%, 82%)', // #bb79fd
				},
				secondary: {
					DEFAULT: 'hsl(300, 100%, 47%)', // #E100FF
					foreground: 'hsl(0, 0%, 100%)', // #ffffff
				},
				accent: {
					DEFAULT: 'hsl(270, 100%, 50%)', // #7F00FF
					foreground: 'hsl(0, 0%, 100%)', // #ffffff
				},
				muted: {
					DEFAULT: 'hsl(210, 16%, 96%)', // #f3f4f6
					foreground: 'hsl(210, 10%, 53%)', // #6b7280
				},
				destructive: {
					DEFAULT: 'hsl(0, 82%, 53%)', // #DC2626
					foreground: 'hsl(0, 0%, 100%)', // #ffffff
				},
				border: 'hsl(210, 16%, 92%)', // #e5e7eb
				input: 'hsl(210, 16%, 92%)', // #e5e7eb
				ring: 'hsl(270, 100%, 50%)', // #7F00FF
				sidebar: {
					DEFAULT: 'hsl(270, 100%, 50%)', // #7F00FF
					foreground: 'hsl(0, 0%, 100%)', // #ffffff
					primary: 'hsl(270, 100%, 50%)', // #7F00FF
					'primary-foreground': 'hsl(0, 0%, 100%)', // #ffffff
					accent: 'hsl(300, 100%, 47%)', // #E100FF
					'accent-foreground': 'hsl(0, 0%, 100%)', // #ffffff
					border: 'hsl(210, 16%, 92%)', // #e5e7eb
					ring: 'hsl(270, 100%, 50%)', // #7F00FF
				},
			},
			borderRadius: {
				lg: '0.625rem',
				md: 'calc(0.625rem - 2px)',
				sm: 'calc(0.625rem - 4px)',
			},
		},
	},
	/* eslint-disable-next-line @typescript-eslint/no-require-imports */
	plugins: [require('tailwindcss-animate')],
};
export default config;
