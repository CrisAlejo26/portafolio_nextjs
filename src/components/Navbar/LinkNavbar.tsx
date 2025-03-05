import Link from 'next/link';

interface Links {
	label: string;
	href: string;
}

const links: Links[] = [
	{
		label: 'Servicios',
		href: '/service',
	},
	{
		label: 'Resumen',
		href: '/about',
	},
	{
		label: 'Proyectos',
		href: '/project',
	},
	{
		label: 'Habilidades',
		href: '/skill',
	},
	{
		label: 'Testimonios',
		href: '/testimonial',
	},
	{
		label: 'Contacto',
		href: '/contact',
	},
];

export const LinkNavbar = () => {
	return (
		<>
			{links.map((link, index) => (
				<li key={`${link}-${index}`}>
					<Link
						href={link.href}
						className="text-foreground dark:text-foreground transition duration-300 hover:text-primary-foreground dark:hover:text-primary-foreground font-bold">
						{link.label}
					</Link>
				</li>
			))}
		</>
	);
};
