'use client';

import React, { useEffect, useState } from 'react';
import { animate, useMotionValue } from 'framer-motion';

export interface CountUpProps {
	/** Valor final al que se desea llegar (obligatorio) */
	value: number;
	/** Duración de la animación en segundos (opcional, por defecto: 1.5) */
	duration?: number;
	/** Si se quiere redondear o mostrar decimales, se puede ajustar la función de formateo */
	format?: (value: number) => string;
}

export const CountUp: React.FC<CountUpProps> = ({
	value,
	duration = 1.5,
	format = v => Math.round(v).toString(),
}) => {
	const motionValue = useMotionValue(0);
	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			const controls = animate(motionValue, value, {
				duration,
				onUpdate: latest => {
					setDisplayValue(latest);
				},
			});
			return controls.stop;
		}, 1000);
	}, [value, duration, motionValue]);

	return <span>{format(displayValue)}</span>;
};
