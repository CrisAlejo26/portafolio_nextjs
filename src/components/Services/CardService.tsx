'use client';
import { useIsMobile } from '@/hooks';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const JetIcon = dynamic(
	() => import('../../animations').then(module => ({ default: module.JetIcon })),
	{
		loading: () => <p>Cargando...</p>,
	},
);

export const CardService = () => {
	const [activeAnimation, setActiveAnimation] = useState<boolean>(false);
	const isMobile = useIsMobile();
	return (
		<div
			className="dark:text-slate-200 grid lg:grid-cols-12 md:grid-cols-1 gap-5 place-items-center mt-20 cursor-pointer hover:bg-[linear-gradient(to_right,_#854ff3_0%,_#182848_51%,_#4b6cb7_100%)] py-10 px-5 transition-all duration-300"
			onMouseOver={() => setActiveAnimation(true)}
			onMouseOut={() => setActiveAnimation(false)}>
			<div className="flex gap-5 lg:col-span-5 place-self-start">
				<span
					className={`font-black text-blue-700 text-xl md:text-2xl ${
						activeAnimation ? 'text-white' : ''
					}`}>
					01
				</span>
				<h2
					className={`bg-clip-text text-transparent text-3xl lg:text-5xl font-black custom-text-gradient ${
						activeAnimation ? 'text-white' : ''
					} dark:text-white`}>
					Desarrollador web
				</h2>
			</div>
			<p
				className={`text-xl md:text-2xl lg:text-xl  lg:col-span-6 place-content-end ${
					activeAnimation ? 'text-white' : ''
				}`}>
				Nos aseguramos de que su sitio web se vea bien en cualquier dispositivo, con diseños
				que se adaptan perfectamente a diferentes tamaños de pantalla.
			</p>
			{!isMobile && (
				<JetIcon
					animationActive={activeAnimation}
					className=" lg:col-span-1 place-self-start lg:place-content-end"
				/>
			)}
		</div>
	);
};
