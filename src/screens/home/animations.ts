export const scrollToTop = {
	hidden: { y: 20, opacity: 0 },
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.3, duration: 0.5 },
	}),
};
