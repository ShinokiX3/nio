import { ESliderArrow } from '../arrows/enums';
import { SliderArrow } from '../arrows/arrow';
import type { TSliderSimpleProps } from './types';

export const SLIDER_SIMPLE_SETTINGS = (props: TSliderSimpleProps) => {
	const {
		arrows = false,
		className,
		dots = false,
		fade = false,
		infinite = false,
		nextArrow,
		prevArrow,
		slidesToScroll = 1,
		slidesToShow = 1,
		speed = 500,
		swipeToSlide = false,

		autoplay = true,
		autoplaySpeed = 6000,
		beforeChange = () => {},
	} = props;

	return {
		settings: {
			arrows,
			className,
			dots,
			fade,
			infinite,
			nextArrow: arrows ? (
				<SliderArrow styles={{ right: '5px' }} type={ESliderArrow.Next} />
			) : (
				nextArrow
			),
			prevArrow: arrows ? (
				<SliderArrow styles={{ left: '5px' }} type={ESliderArrow.Previous} />
			) : (
				prevArrow
			),
			speed,
			slidesToScroll,
			slidesToShow,
			swipeToSlide,

			autoplay,
			autoplaySpeed,
			beforeChange,
		},
	};
};
