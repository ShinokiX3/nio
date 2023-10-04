import './bls.sass';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { scrollToTop } from '../../animations';
import { explores } from '../../data';
import Card from '@components/cards/card';
import Button from '@components/buttons/button';
import cloudDesktop from '@assets/home/videos/brandSection-cloud-desktop.mp4';

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
								key={image.src}
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
