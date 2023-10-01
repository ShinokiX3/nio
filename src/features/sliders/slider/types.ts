export type TSliderSimpleProps = {
	alt?: string;
	arrows?: boolean;
	className?: string;
	dataTestId?: string;
	dots?: boolean;
	fade?: boolean;
	height?: string;
	images?: string[];
	videos?: string[];
	infinite?: boolean;
	nextArrow?: JSX.Element;
	prevArrow?: JSX.Element;
	slidesToScroll?: number;
	slidesToShow?: number;
	swipeToSlide?: boolean;
	speed?: number;
	width?: string;

	autoplay?: boolean;
	autoplaySpeed?: number;
	beforeChange?: (current: number, next: number) => void;
};
