import dynamic from 'next/dynamic';

const Button = dynamic(
	() => import('../../components').then(module => ({ default: module.Button })),
	{
		ssr: false,
	},
);
const Input = dynamic(
	() => import('../../components').then(module => ({ default: module.Input })),
	{
		ssr: false,
	},
);
const Textarea = dynamic(
	() => import('../../components').then(module => ({ default: module.Textarea })),
	{
		ssr: false,
	},
);

export const Form = () => {
	return (
		<>
			<form className="max-w-xl p-8 bg-white dark:bg-dark-background">
				<h6 className="w-full pb-3 text-center bg-clip-text font-bold text-transparent text-5xl md:text-6xl bg-[linear-gradient(to_right,_#854ff3_0%,_#182848_51%,_#4b6cb7_100%)] dark:bg-[linear-gradient(to_right,_#00d2ff_0%,_#3a7bd5_51%,_#00d2ff_100%)]">
					¡Trabajemos juntos!
				</h6>
				<p className="my-2">
					Diseñamos y programamos aplicaciones web y móviles a la medida, elegimos siempre
					lo mejor
				</p>
				<div className="rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4">
					<div className="mb-6">
						<Input type="text" placeholder="Your Name" className="bg-gray-800" />
					</div>
					<div className="mb-6">
						<Input type="email" placeholder="Your Email" className="bg-gray-800" />
					</div>
					<div className="mb-6 lg:col-span-2">
						<Input type="text" placeholder="Your Phone" className="bg-gray-800" />
					</div>
					<div className="mb-6 lg:col-span-2">
						<Textarea rows={2} placeholder="Your Message" className="bg-gray-800" />
					</div>
					<div className="lg:col-span-2">
						<Button type="submit" className="w-full" variant={'gradient'}>
							Enivar mensaje
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};
