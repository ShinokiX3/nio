import './home.sass';

import powerbanner from '../../assets/home/images/nio-power-banner-desktop.jpg';
import servicebanner from '../../assets/home/images/nio-service-banner-desktop.jpg';

import niopowertitle from '../../assets/home/svg/nio-power-logo.svg';
import nioservicetitle from '../../assets/home/svg/nio-service-logo.svg';

import niopowerslide1 from '../../assets/home/images/nio-power-slider-1-desktop.jpg';
import niopowerslide2 from '../../assets/home/images/nio-power-slider-2-desktop.jpg';
import niopowerslide3 from '../../assets/home/images/nio-power-slider-3-desktop.jpg';

import nioserviceslide1 from '../../assets/home/images/nio-service-slider-1-desktop.jpg';
import nioserviceslide2 from '../../assets/home/images/nio-service-slider-2-desktop.jpg';
import nioserviceslide3 from '../../assets/home/images/nio-service-slider-3-desktop.jpg';

import Promo from './sections/promo';
import Discover from './sections/discover';
import Bls from './sections/bls';
import About from './sections/about';
import House from './sections/house';

export interface IImage {
	image: { src: string; alt: string };
	description: {
		title: string;
		desc: string;
	};
}

const powerslides = [
	{
		image: { src: niopowerslide1, alt: 'Nio power slide 1' },
		description: {
			title: 'NIO Power Home',
			desc: `Wake up and hit the road with full battery`,
		},
	},
	{
		image: { src: niopowerslide2, alt: 'Nio power slide 2' },
		description: {
			title: 'Power Swap Station',
			desc: `Fully-automatic battery swap in just a short coffee break`,
		},
	},
	{
		image: { src: niopowerslide3, alt: 'Nio power slide 3' },
		description: {
			title: 'Power Mobile',
			desc: `Recharge 100 km of range in just 10 minutes`,
		},
	},
];

const serviceslides = [
	{
		image: { src: nioserviceslide1, alt: 'Nio service slide 1' },
		description: {
			title: '10-Year Unlimited Warranty',
			desc: `Always reassuring on the roads`,
		},
	},
	{
		image: { src: nioserviceslide2, alt: 'Nio service slide 2' },
		description: {
			title: 'Worry-Free Service Package',
			desc: `20+ after-sales scenarios for a hassle-free experience`,
		},
	},
	{
		image: { src: nioserviceslide3, alt: 'Nio service slide 3' },
		description: {
			title: 'Lifetime Free Roadside Rescue',
			desc: `On call 24/7 to come to your rescue whenever and wherever you are`,
		},
	},
];

const Home = () => {
	return (
		<div className="home">
			<Promo />
			<Discover />
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
			<House />
		</div>
	);
};

export default Home;
