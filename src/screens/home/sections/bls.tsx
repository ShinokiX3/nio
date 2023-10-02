import Card from '../../../components/cards/card';
import Button from '../../../components/buttons/button';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import explore1 from '../../../assets/home/images/explore-item-1.jpg';
import explore2 from '../../../assets/home/images/1671174630837-bslSection.explore.items.1.src-B970EE31B1A41026.jpg';
import explore3 from '../../../assets/home/images/1682477336938-bslSection.explore.items.4.src-B2D90FFDCB239D60.jpg';
import explore4 from '../../../assets/home/images/explore-item-4.jpg';
import explore5 from '../../../assets/home/images/explore-item-5.jpg';
import cloudDesktop from '../../../assets/home/videos/brandSection-cloud-desktop.mp4';
import { scrollToTop } from '../animations';

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

const Bls = () => {
	const scrollRef = useRef(null);

	return (
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
	);
};

export default Bls;
