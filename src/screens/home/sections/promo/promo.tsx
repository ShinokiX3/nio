// TODO: manage file paths
import './promo.sass';
import { useState } from 'react';
import { SliderSimple } from '../../../../features/sliders/slider/simple';
import Button from '../../../../components/buttons/button';

interface IPromo {
	videos: string[];
	descriptions: string[];
}

const Promo: React.FC<IPromo> = ({ videos, descriptions }) => {
	const [activeSlide, setActiveSlide] = useState<number>(0);

	return (
		<section className="section-promo">
			<SliderSimple
				arrows={false}
				dots={true}
				fade={true}
				videos={videos}
				infinite={true}
				autoplay={true}
				autoplaySpeed={6000}
				beforeChange={(_, next) => {
					setActiveSlide(next);
				}}
			/>
			<div className="description">
				<img src={descriptions[activeSlide]} alt="Promo car explained" />
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
