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
			className="text-2xl dark:text-foreground focus:outline-none xl:hidden pr-4">
			{isOpen ? <FiX /> : <FiMenu />}
		</Button>
	);
}
