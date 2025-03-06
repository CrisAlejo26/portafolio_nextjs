'use client';
import { Button } from './Button';
import { useTheme } from 'next-themes';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

export function ThemeToggleButton() {
	const { setTheme, theme } = useTheme();

	const handleToggle = () => {
		if (theme !== 'dark') {
			return setTheme('dark');
		}
		return setTheme('light');
	};

	return (
		<section className="fixed top-1/2 -translate-y-1/2 right-0 z-50">
			<Button
				onClick={handleToggle}
				className=" group relative flex items-center justify-center h-12 w-12 gradient text-white rounded-l-full overflow-hidden transition-all duration-300 hover:w-32
        ">
				{/* Icono del modo actual */}
				{theme === 'dark' ? <FaRegSun size={20} /> : <FaRegMoon size={20} />}

				{/* Texto que solo se muestra en hover */}
				<span className="ml-2 hidden group-hover:inline">
					{theme !== 'dark' ? 'Dark' : 'Light'}
				</span>
			</Button>
		</section>
	);
}
