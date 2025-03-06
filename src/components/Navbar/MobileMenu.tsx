import { Button } from '../ui';
import { LinkNavbar } from './LinkNavbar';

interface MobileMenuProps {
	isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
	return (
		<nav
			className={`xl:hidden bg-background dark:bg-foreground shadow-md overflow-hidden transition-all duration-300 ease-in
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
