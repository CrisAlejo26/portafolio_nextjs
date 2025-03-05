'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

export interface AnimatedSectionProps {
	/** Contenido a renderizar */
	children: React.ReactNode;
	/** Duración de la animación en segundos (default: 0.5) */
	duration?: number;
	/** Dirección desde la que entra el contenido: 'up' (default), 'down', 'left' o 'right' */
	direction?: 'up' | 'down' | 'left' | 'right';
	/** Valor de easing (default: 'easeOut') */
	easing?: string | (string | number)[];
	/** Margen (offset) en la detección del viewport (default: -50) */
	offset?: number;
}

export const FadeInSection: React.FC<AnimatedSectionProps> = ({
	children,
	duration = 0.5,
	direction = 'up',
	easing = 'easeOut',
	offset = -50,
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: `${offset}px` });

	const variants: Variants = {
		hidden: {
			opacity: 0,
			...(direction === 'up' && { y: 50 }),
			...(direction === 'down' && { y: -50 }),
			...(direction === 'left' && { x: 50 }),
			...(direction === 'right' && { x: -50 }),
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
		},
	};

	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			transition={{ duration, ease: easing }}
			className="w-full">
			{children}
		</motion.div>
	);
};
