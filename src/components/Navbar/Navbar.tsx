'use client';
import { useIsMobile } from '@/hooks';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Link from 'next/link';
const Logo = dynamic(() => import('../Logo').then(module => ({ default: module.Logo })), {
	ssr: false,
});
const DesktopMenu = dynamic(
	() => import('./DesktopMenu').then(module => ({ default: module.DesktopMenu })),
	{
		ssr: false,
	},
);
const HamburgerButton = dynamic(
	() => import('./HamburgerButton').then(module => ({ default: module.HamburgerButton })),
	{
		ssr: false,
	},
);
const MobileMenu = dynamic(
	() => import('./MobileMenu').then(module => ({ default: module.MobileMenu })),
	{
		ssr: false,
	},
);

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const isMobile = useIsMobile();

	return (
		<header className="fixed top-0 left-0 w-full z-30 bg-background dark:bg-dark-background backdrop-blur-sm shadow-lg dark:shadow-blue-950">
			<div className="container md:mx-auto p-2 flex items-center justify-between">
				{/* Logo o marca */}
				<div className="font-bold text-primary dark:text-secondary-foreground">
					<Link
						href="/"
						className="text-xl md:text-2xl items-center flex hover:text-blue-400 transition-all duration-300">
						<Logo />
						{isMobile ? 'Cristian code' : 'cristian@cristiancode.es'}
					</Link>
				</div>

				{/* Menú de escritorio */}
				<DesktopMenu />

				{/* Botón hamburguesa para móviles */}
				<HamburgerButton isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
			</div>

			{/* Menú móvil con animación */}
			<MobileMenu isOpen={menuOpen} />
		</header>
	);
}
