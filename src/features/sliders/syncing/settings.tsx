import { SliderArrow } from '../arrows/arrow';
import { ESliderArrow } from '../arrows/enums';
import type { TSliderSyncingProps } from './types';

export const SLIDER_SYNCING_SETTINGS = (props: TSliderSyncingProps) => {
	const {
		arrowsFor = false,
		arrowsModal = false,
		arrowsNav = false,
		dots = false,
		focusOnSelect = false,
		infinite = false,
		nextArrow,
		prevArrow,
		slidesToScroll = 1,
		slidesToShow = 1,
		swipeToSlide = false,
		speed = 500,
		beforeChange = () => {},
	} = props;

	const settings = {
		dots,
		focusOnSelect,
		slidesToScroll,
		speed,
		swipeToSlide,
		beforeChange,
	};

	return {
		settingsForModal: {
			...settings,
			arrows: arrowsModal,
			className: 'SliderForModal',
			infinite,
			nextArrow: arrowsModal ? (
				<SliderArrow styles={{ right: '5px' }} type={ESliderArrow.Next} />
			) : (
				nextArrow
			),
			prevArrow: arrowsModal ? (
				<SliderArrow styles={{ left: '5px' }} type={ESliderArrow.Previous} />
			) : (
				prevArrow
			),
			slidesToShow,
		},
		settingsFor: {
			...settings,
			arrows: arrowsFor,
			className: 'SliderSyncing-For',
			nextArrow: arrowsFor ? (
				<SliderArrow styles={{ right: '5px' }} type={ESliderArrow.Next} />
			) : (
				nextArrow
			),
			prevArrow: arrowsFor ? (
				<SliderArrow styles={{ left: '5px' }} type={ESliderArrow.Previous} />
			) : (
				prevArrow
			),
		},
		settingsNav: {
			...settings,
			arrows: arrowsNav,
			centerMode: true,
			className: 'SliderSyncing-Nav',
			slidesToShow: 3,
			variableWidth: false,
			responsive: [
				{
					breakpoint: 1150,
					settings: {
						slidesToShow: 2,
						centerMode: true,
					},
				},
			],
		},
	};
};
