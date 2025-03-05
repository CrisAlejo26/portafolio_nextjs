'use client';
import { LinkNavbar } from './LinkNavbar';
import { Button } from '../ui';
import { Logo } from '../Logo';
import { useIsMobile } from '@/hooks';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const isMobile = useIsMobile();

	return (
		<header className="fixed top-0 left-0 w-full z-30 bg-background dark:bg-background/90 backdrop-blur-sm shadow-lg">
			<div className="container mx-auto py-2 flex items-center justify-between">
				{/* Logo o marca */}
				<div className="font-bold text-primary dark:text-primary">
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

import { FiMenu, FiX } from 'react-icons/fi';

interface HamburgerButtonProps {
	isOpen: boolean;
	toggle: () => void;
}

export function HamburgerButton({ isOpen, toggle }: HamburgerButtonProps) {
	return (
		<Button
			aria-label="Abrir menú"
			aria-expanded={isOpen}
			onClick={toggle}
			className="text-2xl dark:text-foreground focus:outline-none xl:hidden pr-4">
			{isOpen ? <FiX /> : <FiMenu />}
		</Button>
	);
}

interface MobileMenuProps {
	isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
	return (
		<nav
			className={`xl:hidden bg-background shadow-md overflow-hidden transition-all duration-300 ease-in
      ${isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}>
			<ul className="flex flex-col space-y-4 px-6 py-4">
				<LinkNavbar />
				<li>
					<Button
						variant="gradient"
						rounded="full"
						className="w-full"
						aria-label="Ir a contactar al desarrollador">
						¡Hablame!
					</Button>
				</li>
			</ul>
		</nav>
	);
}

export function DesktopMenu() {
	return (
		<nav className="hidden xl:flex">
			<ul className="flex space-x-7 xl:space-x-7 items-center">
				<LinkNavbar />
				<li>
					<Button
						variant="gradient"
						rounded="full"
						aria-label="Ir a contactar al desarrollador">
						¡Hablame!
					</Button>
				</li>
			</ul>
		</nav>
	);
}
