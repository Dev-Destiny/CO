// import "react";
// import type { HtmlHTMLAttributes } from "react";

// type Props = {
// 	children: React.ReactNode;
// 	type: string;
// 	size?: string;
// 	stroke?: boolean;
// } & HtmlHTMLAttributes<HTMLButtonElement>;

// const Button = ({ children, type, size, stroke, ...rest }: Props) => {
// 	const width = size === "full" ? "w-full" : "w-fit";
// 	const border = stroke === true ? "border-1 border-border" : "";

// 	return (
// 		<div>
// 			<button
// 				{...rest}
// 				className={`${
// 					type === "primary"
// 						? " text-white bg-primary hover:bg-blue-800 active:bg-blue-800"
// 						: "transparent text-text hover:bg-gray-300 active:bg-gray-300"
// 				} ${width} ${border} transition-all duration-500 cursor-pointer px-5 py-2 rounded-[8px] text-[0.8rem]`}
// 			>
// 				{children}
// 			</button>
// 		</div>
// 	);
// };

// export default Button;

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "special";
type ButtonSize = "sm" | "md" | "lg" | "full";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: ButtonVariant;
	size?: ButtonSize;
	stroke?: boolean;
	loading?: boolean;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
}

/*
  Design Tokens (referencing the Tailwind @theme)
  --color-btn-primary
  --color-btn-primary-hover
  --color-btn-primary-active
  --color-text, --color-border, etc.
*/

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		"text-white bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary-active",
	secondary: "bg-surface text-text hover:bg-surface/70 active:bg-surface/60",
	ghost: "bg-transparent text-text-muted hover:bg-surface/40 active:bg-surface/60",
	danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
	special:
		"text-white bg-btn-primary border-b-5 border-surface hover:bg-btn-primary-hover active:bg-btn-primary-active",
};

const sizeStyles: Record<ButtonSize, string> = {
	sm: "px-3 py-1.5 text-[0.75rem]",
	md: "px-4 py-2 text-[0.85rem]",
	lg: "px-5 py-2.5 text-[0.95rem]",
	full: "w-full px-5 py-2 text-[0.9rem]",
};

const Button = ({
	children,
	variant = "primary",
	size = "md",
	stroke = false,
	loading = false,
	leftIcon,
	rightIcon,
	className,
	...rest
}: Props) => {
	return (
		<button
			{...rest}
			disabled={loading || rest.disabled}
			className={clsx(
				"rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 select-none relative overflow-hidden",
				variantStyles[variant],
				sizeStyles[size],
				stroke && "border border-border",
				(loading || rest.disabled) && "opacity-60 cursor-not-allowed",
				className
			)}
		>
			{variant == "special" && (
				<motion.div
					initial={{ right: "100%" }}
					animate={{ left: "100%" }}
					transition={{
						duration: 0.7,
						delay: 1,
						repeat: Infinity,
						repeatDelay: 4,
					}}
					className='absolute h-full top-0 z-20 flex w-fit gap-2'
				>
					<div className='h-full w-10 bg-gradient-to-b from-white/50 to-transparent -skew-x-12'></div>
					<div className='h-full w-4 bg-gradient-to-b from-white/50 to-transparent -skew-x-12'></div>
				</motion.div>
			)}
			{loading && (
				<span className='animate-spin border-2 border-white/20 border-t-white rounded-full w-4 h-4' />
			)}

			{!loading && leftIcon && <span className='flex'>{leftIcon}</span>}

			<span>{children}</span>

			{!loading && rightIcon && <span className='flex'>{rightIcon}</span>}
		</button>
	);
};

export default Button;
