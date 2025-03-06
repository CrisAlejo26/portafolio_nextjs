import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '../ui';

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
			className="text-2xl focus:outline-none xl:hidden pr-4 dark:bg-violet-900">
			{isOpen ? <FiX /> : <FiMenu />}
		</Button>
	);
}
