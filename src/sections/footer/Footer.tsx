import dynamic from 'next/dynamic';
import Link from 'next/link';

const Logo = dynamic(
	() => import('../../components/Logo').then(module => ({ default: module.Logo })),
	{
		ssr: false,
	},
);
const FadeInSection = dynamic(
	() => import('../../animations').then(module => ({ default: module.FadeInSection })),
	{
		ssr: false,
	},
);

interface Links {
	label: string;
	href: string;
}

const links: Links[] = [
	{ label: 'Servicios', href: '#service' },
	{ label: 'Proyectos', href: '#project' },
	{ label: 'Testimonios', href: '#testimonial' },
	{ label: 'Contacto', href: '#contact' },
];

export const Footer = () => {
	return (
		<>
			<FadeInSection>
				<section className={`relative py-10 bg-purple-50 dark:bg-dark-background`}>
					<article className="px-4 mx-auto container grid grid-cols-1 place-items-center gap-5">
						<Logo />
						<div>
							<ul className="flex gap-10 flex-col text-center lg:text-start lg:flex-row">
								{links.map((link, index) => (
									<li key={`${link}-${index}`}>
										<Link
											href={link.href}
											className="text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<p className="dark:text-gray-500">
							© 2025 Todos los derechos reservados por{' '}
							<span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,_#854ff3_0%,_#182848_51%,_#4b6cb7_100%)] dark:bg-[linear-gradient(to_right,_#00d2ff_0%,_#3a7bd5_51%,_#00d2ff_100%)] font-bold">
								Cristian Alejandro Arroyave
							</span>
						</p>
					</article>
				</section>
			</FadeInSection>
		</>
	);
};
