'use client';

import { logoDark, logoLight } from '@/assets';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Logo = () => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// Evita el renderizado en el servidor o antes de que el tema esté disponible
		return null;
	}

	const logoSrc = theme === 'dark' ? logoDark.src : logoLight.src;

	return (
		<div className="flex items-center w-16 md:w-20 xl:w-24">
			<Image
				src={logoSrc}
				alt="Página principal de Cristian code"
				width={100}
				height={100}
				className="object-contain"
				priority
			/>
		</div>
	);
};
