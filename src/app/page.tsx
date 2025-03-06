import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../sections').then(module => ({ default: module.Header })), {
	loading: () => <p>Cargando...</p>,
});
const Navbar = dynamic(() => import('../components').then(module => ({ default: module.Navbar })), {
	loading: () => <p>Cargando...</p>,
});

export default function Home() {
	return (
		<section className="">
			<Navbar />
			<Header />
		</section>
	);
}
