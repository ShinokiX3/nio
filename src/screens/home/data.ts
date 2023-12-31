// TODO: rework sources

import et5 from '@assets/home/videos/et5-touring-video.mp4';
import et5desk from '@assets/home/videos/homepage-slider-et5-desktop.mp4';
import es6 from '@assets/home/videos/top-hero-es6.mp4';
import ec7 from '@assets/home/videos/video-ec7.mp4';
import es8 from '@assets/home/videos/video-es8-prime.mp4';

import d_et5 from '@assets/home/svg/ET5-WM-Home.svg';
import d_et5desk from '@assets/home/svg/ET5t-WM-Home.svg';
import d_es6 from '@assets/home/svg/ES6-WM-Home.svg';
import d_ec7 from '@assets/home/svg/EC7-WM-Home.svg';
import d_es8 from '@assets/home/svg/ES8-WM-Home.svg';

import ec6wm from '@assets/home/images/vehicle-slider-ec6-desktop.png';
import ec7wm from '@assets/home/images/vehicle-slider-ec7-desktop.jpg';
import es6wm from '@assets/home/images/vehicle-slider-es6-desktop.png';
import es8wm from '@assets/home/images/vehicle-slider-es8-prime-desktop.jpg';
import et5twm from '@assets/home/images/vehicle-slider-et5-touring-desktop.png';
import et5wm from '@assets/home/images/et5-desktop.png';

import m_ec6wm from '@assets/home/images/vehicle-slider-ec6-mobile.png';
import m_ec7wm from '@assets/home/images/vehicle-slider-ec7-mobile.png';
import m_es6wm from '@assets/home/images/vehicle-slider-es6-mobile.png';
import m_es8wm from '@assets/home/images/vehicle-slider-es8-prime-mobile.png';
import m_et5twm from '@assets/home/images/vehicle-slider-et5-touring-mobile.png';
import m_et5wm from '@assets/home/images/et5-mobile.png';

import t_ec6bl from '@assets/home/images/discover/EC6-Black.svg';
import t_ec7 from '@assets/home/images/discover/EC7.svg';
import t_es6 from '@assets/home/images/discover/ES6.svg';
import t_es7 from '@assets/home/images/discover/ES7.svg';
import t_es8 from '@assets/home/images/discover/ES8.svg';
import t_et5 from '@assets/home/images/discover/ET5.svg';
import t_et5t from '@assets/home/images/discover/ET5T.svg';
import t_et7 from '@assets/home/images/discover/ET7.svg';

import niohouse1 from '@assets/home/images/nio-house-banner-desktop-1.jpg';
import niohouse2 from '@assets/home/images/nio-house-banner-desktop-2.jpg';
import niohouse3 from '@assets/home/images/nio-house-banner-desktop-3.jpg';
import niohouse4 from '@assets/home/images/1664508907963-nioHouse.banners.3.mediaSources.0.src-D8AEEAF2E80E8EB8.jpg';

import niopowerslide1 from '@assets/home/images/nio-power-slider-1-desktop.jpg';
import niopowerslide2 from '@assets/home/images/nio-power-slider-2-desktop.jpg';
import niopowerslide3 from '@assets/home/images/nio-power-slider-3-desktop.jpg';

import nioserviceslide1 from '@assets/home/images/nio-service-slider-1-desktop.jpg';
import nioserviceslide2 from '@assets/home/images/nio-service-slider-2-desktop.jpg';
import nioserviceslide3 from '@assets/home/images/nio-service-slider-3-desktop.jpg';

import explore1 from '@assets/home/images/explore-item-1.jpg';
import explore2 from '@assets/home/images/1671174630837-bslSection.explore.items.1.src-B970EE31B1A41026.jpg';
import explore3 from '@assets/home/images/1682477336938-bslSection.explore.items.4.src-B2D90FFDCB239D60.jpg';
import explore4 from '@assets/home/images/explore-item-4.jpg';
import explore5 from '@assets/home/images/explore-item-5.jpg';

import nioslider1 from '@assets/home/images/slider-1-desktop.jpg';
import nioslider2 from '@assets/home/images/slider-2-desktop.jpg';
import nioslider3 from '@assets/home/images/slider-3-desktop.jpg';
import nioslider4 from '@assets/home/images/slider-4-desktop.jpg';

import slier1 from '@assets/home/svg/slider-1-icon.svg';
import slier2 from '@assets/home/svg/slider-2-icon.svg';
import slier3 from '@assets/home/svg/slider-3-icon.svg';
import slier4 from '@assets/home/svg/slider-4-icon.svg';

export const houseCardsDescriptions = [
	nioslider1,
	nioslider2,
	nioslider3,
	nioslider4,
];
export const houseCardsImages = [slier1, slier2, slier3, slier4];

export const sliderVideos = [et5, et5desk, es6, ec7, es8];
export const sliderDescriptions = [d_et5desk, d_et5, d_es6, d_ec7, d_es8];

export const sliderExploreCars = [ec6wm, ec7wm, es6wm, es8wm, et5twm, et5wm];
export const sliderExploreCarsMobile = [
	m_ec6wm,
	m_ec7wm,
	m_es6wm,
	m_es8wm,
	m_et5twm,
	m_et5wm,
];

export const sliderTitleCars = [
	t_ec6bl,
	t_ec7,
	t_es6,
	t_es7,
	t_es8,
	t_et5,
	t_et5t,
	t_et7,
];
export const nioHouses = [niohouse1, niohouse2, niohouse3, niohouse4];
export const nioHouseTitles = [
	'NIO House, Oslo',
	'NIO House, Hefei',
	'NIO House, Foshan',
	'NIO House, Ningbo',
];

export const powerslides = [
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

export const serviceslides = [
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

export const explores = [
	{
		image: { src: explore1, alt: 'Discover Nio' },
		description: {
			title: 'EVE',
			desc: `Our vision for an autonomous car of the future`,
		},
	},
	{
		image: { src: explore2, alt: 'Discover Nio' },
		description: {
			title: 'EP9',
			desc: `One of the fastest electric cars in the world`,
		},
	},
	{
		image: { src: explore4, alt: 'Discover Nio' },
		description: {
			title: 'NIO Life',
			desc: `NIO's original design and lifestyle brand`,
		},
	},
	{
		image: { src: explore5, alt: 'Discover Nio' },
		description: {
			title: 'Clean Parks',
			desc: `An ecological co-construction initiative launched by NIO`,
		},
	},
	{
		image: { src: explore3, alt: 'Discover Nio' },
		description: {
			title: '10 Billion Kilometers and Beyond',
			desc: `NIO Users Cumulative Mileage Exceeds 10B Kilometers10 Billion Kilometers and Beyond`,
		},
	},
];
