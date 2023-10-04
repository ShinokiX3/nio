import { useState } from 'react';
import { SliderSimple } from '../../../features/sliders/slider/simple';
import { motion } from 'framer-motion';
import { nioHouseTitles, nioHouses } from '../data';
import niohouse from '../../../assets/home/images/title-logo-desktop1.png';
import { scrollToTop } from '../animations';

import nioslider1 from '../../../assets/home/images/slider-1-desktop.jpg';
import nioslider2 from '../../../assets/home/images/slider-2-desktop.jpg';
import nioslider3 from '../../../assets/home/images/slider-3-desktop.jpg';
import nioslider4 from '../../../assets/home/images/slider-4-desktop.jpg';

import slier1 from '../../../assets/home/svg/slider-1-icon.svg';
import slier2 from '../../../assets/home/svg/slider-2-icon.svg';
import slier3 from '../../../assets/home/svg/slider-3-icon.svg';
import slier4 from '../../../assets/home/svg/slider-4-icon.svg';
import Button from '../../../components/buttons/button';

import './house.sass';

const House = () => {
	const [activeHouseSlide, setActiveHouseSlide] = useState<number>(0);

	return (
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
								Welcome to NIO House. A pleasant, welcoming space for our users
								and community, to express, share and experience memorable
								moments together.
							</p>
						</div>
					</div>
					<div className="house-cards_wrapper">
						<div className="house-cards_container">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ amount: 0.1 }}
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
								viewport={{ amount: 0.1 }}
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
								viewport={{ amount: 0.1 }}
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
								viewport={{ amount: 0.1 }}
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
	);
};

export default House;
