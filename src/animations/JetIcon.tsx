'use client';
import { motion, Variants } from 'framer-motion';
import { FaFighterJet } from 'react-icons/fa';

// Animación para el avión: avanza a la derecha, luego sube y baja y vuelve a la posición inicial.
const planeVariants: Variants = {
	initial: { x: 0, y: 0 },
	fly: {
		x: [0, 20, 20, 20, 0],
		y: [0, 0, -7, 7, 0],
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: 'easeInOut',
		},
	},
};

const lineTopVariants: Variants = {
	initial: { x: '100%', opacity: 0 },
	line: {
		x: [30, -100],
		opacity: [0, 1, 0],
		transition: {
			duration: 2,
			repeat: Infinity,
			delay: 1,
			ease: 'easeInOut',
		},
	},
};
const lineBottomVariants: Variants = {
	initial: { x: '100%', opacity: 0, y: -5 },
	line: {
		x: [30, -100],
		opacity: [0, 1, 0],
		transition: {
			duration: 2,
			repeat: Infinity,
			delay: 1.5,
			ease: 'easeInOut',
		},
	},
};

interface JetIconProps {
	animationActive: boolean;
	className?: string;
}

export function JetIcon({ animationActive, className }: JetIconProps) {
	return (
		<div
			className={`relative w-24 h-auto overflow-hidden text-center ${className}`}
			aria-hidden="true">
			<motion.div
				initial="initial"
				animate={animationActive ? 'fly' : 'initial'}
				variants={planeVariants}>
				<FaFighterJet size={50} color={`${animationActive ? 'white' : '#4c96f3'}`} />
			</motion.div>
			<motion.div
				initial="initial"
				animate={animationActive ? 'line' : 'initial'}
				variants={lineTopVariants}
				className="absolute w-3 h-0.5 top-2 left-3 bg-blue-100"></motion.div>
			<motion.div
				initial="initial"
				animate={animationActive ? 'line' : 'initial'}
				variants={lineBottomVariants}
				className="absolute w-3 h-0.5  left-3 bg-blue-100"></motion.div>
		</div>
	);
}
