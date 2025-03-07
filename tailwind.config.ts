import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// Modo claro (tal como lo tienes)
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
				// Modo oscuro con tonos azules
				dark: {
					// Fondo principal en un azul muy oscuro (casi negro)
					background: 'hsl(220, 20%, 10%)',
					// Texto y elementos principales en tonos claros azules
					foreground: 'hsl(210, 50%, 90%)',

					// Tarjetas y popovers con fondo ligeramente más claro
					card: {
						DEFAULT: 'hsl(220, 20%, 15%)',
						foreground: 'hsl(210, 50%, 90%)',
					},
					popover: {
						DEFAULT: 'hsl(220, 20%, 15%)',
						foreground: 'hsl(210, 50%, 90%)',
					},
					// Colores primarios en azul con buena saturación
					primary: {
						DEFAULT: 'hsl(215, 80%, 50%)',
						foreground: 'hsl(210, 50%, 95%)',
					},
					secondary: {
						DEFAULT: 'hsl(220, 70%, 50%)',
						foreground: 'hsl(210, 50%, 95%)',
					},
					accent: {
						DEFAULT: 'hsl(225, 90%, 55%)',
						foreground: 'hsl(210, 50%, 95%)',
					},
					// Colores "muted" para elementos secundarios o fondos de secciones
					muted: {
						DEFAULT: 'hsl(210, 20%, 25%)',
						foreground: 'hsl(210, 15%, 60%)',
					},
					// Mantengo el color destructivo en rojo para resaltar acciones negativas
					destructive: {
						DEFAULT: 'hsl(0, 82%, 53%)',
						foreground: 'hsl(0, 0%, 100%)',
					},
					// Bordes, inputs y anillos en tonos oscuros
					border: 'hsl(210, 20%, 30%)',
					input: 'hsl(210, 20%, 30%)',
					ring: 'hsl(225, 90%, 55%)',
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
	plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar')],
};
export default config;
