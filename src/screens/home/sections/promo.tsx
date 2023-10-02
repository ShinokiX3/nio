import { useState } from 'react';
import { SliderSimple } from '../../../features/sliders/slider/simple';
import { sliderDescriptions, sliderVideos } from '../data';
import Button from '../../../components/buttons/button';

const Promo = () => {
	const [activeSlide, setActiveSlide] = useState<number>(0);

	return (
		<section className="section-promo">
			<SliderSimple
				arrows={false}
				dots={true}
				fade={true}
				videos={sliderVideos}
				infinite={true}
				autoplay={true}
				autoplaySpeed={6000}
				beforeChange={(_, next) => {
					setActiveSlide(next);
				}}
			/>
			<div className="description">
				<img src={sliderDescriptions[activeSlide]} alt="Promo car explained" />
				<Button
					type="bordered"
					color="white"
					text="Learn More"
					handler={() => {}}
				/>
			</div>
		</section>
	);
};

export default Promo;
