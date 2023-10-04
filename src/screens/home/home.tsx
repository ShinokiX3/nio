import './home.sass';
import powerbanner from '@assets/home/images/nio-power-banner-desktop.jpg';
import servicebanner from '@assets/home/images/nio-service-banner-desktop.jpg';
import niopowertitle from '@assets/home/svg/nio-power-logo.svg';
import nioservicetitle from '@assets/home/svg/nio-service-logo.svg';
import { About, Bls, Discover, House, Promo } from './sections';
import {
	houseCardsDescriptions,
	houseCardsImages,
	powerslides,
	serviceslides,
	sliderDescriptions,
	sliderExploreCars,
	sliderExploreCarsMobile,
	sliderTitleCars,
	sliderVideos,
} from './data';

export interface IImage {
	image: { src: string; alt: string };
	description: {
		title: string;
		desc: string;
	};
}

const Home = () => {
	return (
		<div className="home">
			<Promo videos={sliderVideos} descriptions={sliderDescriptions} />
			<Discover
				title="Explore all the NIO models"
				subtitle="Swipe left and right to view more models"
				sliderTitles={sliderTitleCars}
				sliderCars={{
					desktop: sliderExploreCars,
					mobile: sliderExploreCarsMobile,
				}}
			/>
			<Bls />
			<About
				banner={powerbanner}
				title={niopowertitle}
				subtitle="An Innovative Smart Power Service Solution"
				text="A holistic power service with chargeable, swappable and upgradable batteries for NIO users"
				slides={powerslides}
			/>
			<About
				banner={servicebanner}
				title={nioservicetitle}
				subtitle="One Click for Worry-Free Service"
				text="A reassuring service experience enabled by NIO's cloud technology."
				slides={serviceslides}
			/>
			<House images={houseCardsImages} descriptions={houseCardsDescriptions} />
		</div>
	);
};

export default Home;
