import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../sections').then(module => ({ default: module.Header })), {
	ssr: false,
});
const Navbar = dynamic(() => import('../components').then(module => ({ default: module.Navbar })), {
	ssr: false,
});
const Services = dynamic(
	() => import('../sections').then(module => ({ default: module.Services })),
	{ ssr: false },
);
const Works = dynamic(() => import('../sections').then(module => ({ default: module.Works })), {
	ssr: false,
});
const History = dynamic(() => import('../sections').then(module => ({ default: module.History })), {
	ssr: false,
});
const Blogs = dynamic(() => import('../sections').then(module => ({ default: module.Blogs })), {
	ssr: false,
});

export default function Home() {
	return (
		<section>
			<Navbar />
			<Header />
			<main>
				<Services />
				<Works />
			</main>
			<History />
			<Blogs />
		</section>
	);
}
