import { useEffect, useState } from 'react';

const TABLET_MIN_WIDTH = 768; // Mínimo ancho para considerar tablet
const TABLET_MAX_WIDTH = 1024; // Máximo ancho para considerar tablet

export function useIsTablet() {
	const [isTablet, setIsTablet] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		const mql = window.matchMedia(
			`(min-width: ${TABLET_MIN_WIDTH}px) and (max-width: ${TABLET_MAX_WIDTH}px)`,
		);

		const onChange = () => {
			setIsTablet(
				window.innerWidth >= TABLET_MIN_WIDTH && window.innerWidth <= TABLET_MAX_WIDTH,
			);
		};

		mql.addEventListener('change', onChange);
		onChange(); // Inicializar el estado al montar el hook
		return () => mql.removeEventListener('change', onChange);
	}, []);

	return !!isTablet;
}
