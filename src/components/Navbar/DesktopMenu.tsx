import { Button } from '../ui';
import { LinkNavbar } from './LinkNavbar';

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
