import clsx from 'clsx';
import { memo } from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import { SLIDER_SIMPLE_SETTINGS } from './settings';
import type { TSliderSimpleProps } from './types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './simple.sass';
import '../slider.sass';

const SliderSimpleComponent: React.FC<TSliderSimpleProps> = (props) => {
	const {
		alt = '',
		dataTestId = 'uikit__slider-simple',
		height,
		images,
		videos,
		width,
	} = props;

	const settings = SLIDER_SIMPLE_SETTINGS(props).settings;
	const isMobileScreen = useMediaQuery({ query: '(max-width: 100px)' });

	return (
		<Slider {...settings} pauseOnHover={false} data-testid={dataTestId}>
			{images
				? images.map((image, index: number) => {
						return (
							<div className="SliderSimple-Item" key={index}>
								<img
									alt={alt}
									className={clsx('SliderSimple-Image', {
										'SliderSimple-Image__mobile': isMobileScreen,
									})}
									height={height}
									src={image}
									width={width}
								/>
							</div>
						);
				  })
				: null}
			{videos
				? videos.map((video, index: number) => {
						return (
							<div className="SliderSimple-Item" key={index}>
								<video
									autoPlay
									muted
									loop
									className={clsx('SliderSimple-Image', {
										'SliderSimple-Image__mobile': isMobileScreen,
									})}
									height={height}
									width={width}
									style={{ width: '100vw' }}
								>
									<source src={video} type="video/mp4" />
								</video>
							</div>
						);
				  })
				: null}
		</Slider>
	);
};

export const SliderSimple = memo(SliderSimpleComponent);
