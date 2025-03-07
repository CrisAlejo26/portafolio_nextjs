'use client';
import { useIsMobile } from '@/hooks';
import { CardServiceI } from '@/interfaces';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const FadeInSection = dynamic(
	() => import('../../animations').then(module => ({ default: module.FadeInSection })),
	{
		loading: () => <p>Cargando...</p>,
	},
);

const JetIcon = dynamic(
	() => import('../../animations').then(module => ({ default: module.JetIcon })),
	{
		loading: () => <p>Cargando...</p>,
	},
);

export const CardService = ({ num, title, description }: CardServiceI) => {
	const [activeAnimation, setActiveAnimation] = useState<boolean>(false);
	const isMobile = useIsMobile();
	return (
		<FadeInSection>
			<div
				className="dark:text-slate-200 grid lg:grid-cols-12 md:grid-cols-1 gap-5 place-items-center  cursor-pointer hover:bg-[linear-gradient(to_right,_#854ff3_0%,_#182848_51%,_#4b6cb7_100%)] py-10 px-5 transition-all duration-300 ease-in-out"
				onMouseOver={() => setActiveAnimation(true)}
				onMouseOut={() => setActiveAnimation(false)}>
				<div className="flex gap-5 lg:col-span-5 place-self-start ">
					<span
						className={`font-black text-blue-700 text-xl md:text-2xl ${
							activeAnimation ? 'text-white' : ''
						}`}>
						{num}
					</span>
					<h2
						className={`bg-clip-text text-transparent text-3xl lg:text-5xl font-black custom-text-gradient py-2 ${
							activeAnimation ? 'text-white' : ''
						} dark:text-white`}>
						{title}
					</h2>
				</div>
				<p
					className={`text-xl md:text-2xl lg:text-xl  lg:col-span-6 place-content-end ${
						activeAnimation ? 'text-white' : ''
					}`}>
					{description}
				</p>
				{!isMobile && (
					<JetIcon
						animationActive={activeAnimation}
						className=" lg:col-span-1 place-self-start lg:place-content-end"
					/>
				)}
			</div>
		</FadeInSection>
	);
};
