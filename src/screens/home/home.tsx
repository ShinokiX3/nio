import { useRef, useState } from 'react';
import Button from '../../components/buttons/button';
import { SliderSimple } from '../../features/sliders/slider/simple';
import {
	sliderVideos,
	sliderDescriptions,
	sliderExploreCars,
	sliderTitleCars,
	nioHouses,
	nioHouseTitles,
} from './data';
import './home.sass';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import cloudDesktop from '../../assets/home/videos/brandSection-cloud-desktop.mp4';

import explore1 from '../../assets/home/images/explore-item-1.jpg';
import explore2 from '../../assets/home/images/1671174630837-bslSection.explore.items.1.src-B970EE31B1A41026.jpg';
import explore3 from '../../assets/home/images/1682477336938-bslSection.explore.items.4.src-B2D90FFDCB239D60.jpg';
import explore4 from '../../assets/home/images/explore-item-4.jpg';
import explore5 from '../../assets/home/images/explore-item-5.jpg';

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

import nioslider1 from '../../assets/home/images/slider-1-desktop.jpg';
import nioslider2 from '../../assets/home/images/slider-2-desktop.jpg';
import nioslider3 from '../../assets/home/images/slider-3-desktop.jpg';
import nioslider4 from '../../assets/home/images/slider-4-desktop.jpg';

import niohouse from '../../assets/home/images/title-logo-desktop1.png';

import slier1 from '../../assets/home/svg/slider-1-icon.svg';
import slier2 from '../../assets/home/svg/slider-2-icon.svg';
import slier3 from '../../assets/home/svg/slider-3-icon.svg';
import slier4 from '../../assets/home/svg/slider-4-icon.svg';

import Card from '../../components/cards/card';

const explores = [
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
	const [activeSlide, setActiveSlide] = useState<number>(0);
	const [activeHouseSlide, setActiveHouseSlide] = useState<number>(0);

	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

	const scrollRef = useRef(null);

	const scrollToTop = {
		hidden: { y: 20, opacity: 0 },
		visible: (custom: number) => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.3, duration: 0.5 },
		}),
	};

	const blueSky = {
		from: { zoom: 1.37959 },
		to: { zoom: 3.3 },
	};

	return (
		<div className="home">
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
					<img
						src={sliderDescriptions[activeSlide]}
						alt="Promo car explained"
					/>
					<Button
						type="bordered"
						color="white"
						text="Learn More"
						handler={() => {}}
					/>
				</div>
			</section>
			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.3 }}
				className="section-discover"
			>
				<motion.h3
					custom={1}
					variants={scrollToTop}
					className="section-discover_title"
				>
					Explore all the NIO models
				</motion.h3>
				<motion.div custom={2} variants={scrollToTop} className="car-titles">
					{sliderTitleCars.map((image) => (
						<img src={image} alt="Car title" />
					))}
				</motion.div>
				<motion.div custom={3} variants={scrollToTop}>
					<SliderSimple
						arrows={true}
						dots={false}
						fade={false}
						images={sliderExploreCars}
						infinite={true}
						autoplay={false}
						beforeChange={(_, next) => {
							// setActiveSlide(next);
							console.log(next);
						}}
					/>
				</motion.div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2 }}
					variants={scrollToTop}
					className="section-discover_more"
				>
					<Button
						type="bordered"
						color="black"
						text="Explore More"
						style={{ borderWidth: '1px' }}
						handler={() => {}}
					/>
				</motion.div>
			</motion.section>
			<motion.section
				className="section-bls"
				ref={scrollRef}
				style={{ overflow: 'scroll' }}
			>
				<div className="bls-container">
					<div className="bls-bluesky">
						<video playsInline autoPlay loop muted>
							<source src={cloudDesktop} type="video/mp4" />
						</video>
						<div className="bluesky-message">
							<div>
								<motion.h3
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ root: scrollRef }}
									className="bluesky-message_title"
								>
									Blue Sky Coming
								</motion.h3>
							</div>
							<p className="bluesky-message_description">
								We believe in a brighter, positive future and a more sustainable
								tomorrow.
							</p>
							<Button
								type="bordered"
								color="white"
								text="Learn More"
								style={{ borderWidth: '1px' }}
								handler={() => {}}
							/>
						</div>
					</div>
					<div className="discover-nio">
						<h3 className="discover-nio_title">Discover the world of NIO</h3>
						<div className="item-container">
							{explores.map(({ image, description }) => (
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ amount: 0.3 }}
									variants={scrollToTop}
									className="item"
								>
									<Card image={image} description={description} />
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</motion.section>
			<section className="section-about">
				<div className="section-about_wrapper">
					<div className="about-banner">
						<img
							className="image-scale"
							src={powerbanner}
							alt="Nio power banner"
						/>
					</div>
					<div className="about-message">
						<img
							className="about-message_title"
							src={niopowertitle}
							alt="Nio power title"
						/>
						<p className="about-message_subtitle">
							An Innovative Smart Power Service Solution
						</p>
						<p className="about-message_text">
							A holistic power service with chargeable, swappable and upgradable
							batteries for NIO users
						</p>
						<Button
							type="bordered"
							color="black"
							text="Learn More"
							style={{ borderWidth: '1px' }}
							handler={() => {}}
						/>
					</div>
				</div>
				<div className="about-detail">
					{powerslides.map(({ image, description }, index) => (
						<motion.div
							initial="hidden"
							whileInView="visible"
							custom={index}
							viewport={{ amount: 0.3 }}
							variants={scrollToTop}
						>
							<Card
								image={{ src: image.src, alt: image.alt }}
								description={{
									title: description.title,
									desc: description.desc,
								}}
								style={{ overflow: 'hidden' }}
								classNameImage="image-scale"
							/>
						</motion.div>
					))}
				</div>
			</section>
			<section className="section-about">
				<div className="section-about_wrapper">
					<div className="about-banner">
						<img
							className="image-scale"
							src={servicebanner}
							alt="Nio power banner"
						/>
					</div>
					<div className="about-message">
						<img
							className="about-message_title"
							src={nioservicetitle}
							alt="Nio power title"
						/>
						<p className="about-message_subtitle">
							One Click for Worry-Free Service
						</p>
						<p className="about-message_text">
							A reassuring service experience enabled by NIO's cloud technology.
						</p>
						<Button
							type="bordered"
							color="black"
							text="Learn More"
							style={{ borderWidth: '1px' }}
							handler={() => {}}
						/>
					</div>
				</div>
				<div className="about-detail">
					{serviceslides.map(({ image, description }, index) => (
						<motion.div
							initial="hidden"
							whileInView="visible"
							custom={index}
							viewport={{ amount: 0.3 }}
							variants={scrollToTop}
						>
							<Card
								image={{ src: image.src, alt: image.alt }}
								description={{
									title: description.title,
									desc: description.desc,
								}}
								style={{ overflow: 'hidden' }}
								classNameImage="image-scale"
							/>
						</motion.div>
					))}
				</div>
			</section>
			<section className="section-house">
				<div className="section-house_container">
					<div className="house-wrapper">
						<SliderSimple
							arrows={false}
							dots={false}
							fade={true}
							images={nioHouses}
							infinite={true}
							autoplay={true}
							autoplaySpeed={5000}
							beforeChange={(_, next) => {
								setActiveHouseSlide(next);
							}}
						/>
						<div className="nio-house-title">
							<p>{nioHouseTitles[activeHouseSlide]}</p>
						</div>
					</div>
					<div className="house-description">
						<div className="house-description_wrapper">
							<div style={{ maxWidth: '481px' }}>
								<img src={niohouse} alt="Nio house logo" />
								<p>
									Welcome to NIO House. A pleasant, welcoming space for our
									users and community, to express, share and experience
									memorable moments together.
								</p>
							</div>
						</div>
						<div className="house-cards_wrapper">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ amount: 0.3 }}
								variants={scrollToTop}
								className="coffe-card"
							>
								<div className="coffe-card-desc">
									<img src={slier1} alt="Slider1" />
									<div className="coffe-card-desc_title">
										<h3>Living Café</h3>
										<p>Savor drinks, and enjoy your time.</p>
									</div>
								</div>
								<img src={nioslider1} alt="Coffe card item" />
							</motion.div>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ amount: 0.3 }}
								variants={scrollToTop}
								className="coffe-card"
							>
								<div className="coffe-card-desc">
									<img src={slier2} alt="Slider2" />
									<div className="coffe-card-desc_title">
										<h3>Living Café</h3>
										<p>Savor drinks, and enjoy your time.</p>
									</div>
								</div>
								<img src={nioslider2} alt="Coffe card item" />
							</motion.div>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ amount: 0.3 }}
								variants={scrollToTop}
								className="coffe-card"
							>
								<div className="coffe-card-desc">
									<img src={slier3} alt="Slider3" />
									<div className="coffe-card-desc_title">
										<h3>Living Café</h3>
										<p>Savor drinks, and enjoy your time.</p>
									</div>
								</div>
								<img src={nioslider3} alt="Coffe card item" />
							</motion.div>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ amount: 0.3 }}
								variants={scrollToTop}
								className="coffe-card"
							>
								<div className="coffe-card-desc">
									<img src={slier4} alt="Slider4" />
									<div className="coffe-card-desc_title">
										<h3>Living Café</h3>
										<p>Savor drinks, and enjoy your time.</p>
									</div>
								</div>
								<img src={nioslider4} alt="Coffe card item" />
							</motion.div>
						</div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ amount: 0.3 }}
							variants={scrollToTop}
							className="house-learnmore"
						>
							<Button
								type="bordered"
								color="white"
								text="Learn More"
								style={{ borderWidth: '1px' }}
								handler={() => {}}
							/>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
