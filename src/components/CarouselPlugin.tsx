'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from './ui';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/Carousel';
import { alejandro, gina, sebastian } from '@/assets';
import { FaQuoteLeft } from 'react-icons/fa';

interface CarouselI {
	description: string;
	name: string;
	post: string;
	image: StaticImageData;
}

const dataCarousel: CarouselI[] = [
	{
		description:
			'Sus labores fueron polifuncionales dando respuesta a cada requerimiento en nuestra empresa.',
		name: 'Gina Salazar',
		post: 'Coordinadora Administrativa de Uno27',
		image: gina,
	},
	{
		description:
			'Su capacidad para dar atención a cada usuario fue magnífica, ayudo a dar agilidad a cada trámite.',
		name: 'Alejandro Ramirez',
		post: 'Personero Municipal de la Alcaldia',
		image: alejandro,
	},
	{
		description:
			'Demostró su agilidad en el aprendizaje de cada tarea que le fue encomendada y la realizó de la mejor forma',
		name: 'Sebastián Delgado',
		post: 'Jefe en Sitemas de Cinde',
		image: sebastian,
	},
];

export function CarouselPlugin() {
	const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

	return (
		<Carousel
			plugins={[plugin.current]}
			className="max-w-sm md:max-w-md"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}>
			<CarouselContent>
				{dataCarousel.map((data, index) => (
					<CarouselItem key={index}>
						<div className="p-1 dark:bg-slate-800">
							<Card className="dark:bg-slate-800 border-none">
								<CardContent className="grid grid-cols-1 grid-rows-7 aspect-square p-6">
									<span className="text-blue-500 dark:text-blue-300">
										<FaQuoteLeft />
									</span>
									<h6 className="font-normal lg:text-2xl row-span-4 place-content-center dark:text-white">
										{data.description}
									</h6>
									<section className="flex justify-between items-center row-span-2 dark:text-white">
										<div className="w-2/3">
											<p className="font-bold ">{data.name}</p>
											<p className="text-xs">{data.post}</p>
										</div>
										<div className="w-10 h-10 md:w-20 md:h-20 bg-blue-500 rounded-full relative">
											<Image
												src={data.image.src}
												alt="Fotografía de Cristian Alejandro Arroyave"
												fill
												quality={75}
												className="object-cover rounded-full"
											/>
										</div>
									</section>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
