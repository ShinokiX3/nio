import './house.sass';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SliderSimple } from '@features/sliders/slider/simple';
import { scrollToTop } from '../../animations';
import { nioHouseTitles, nioHouses } from '../../data';
import Button from '../../../../components/buttons/button';
import niohouse from '@assets/home/images/title-logo-desktop1.png';

// TODO: rework description types

interface IHome {
	images: string[];
	descriptions: string[];
}

const House: React.FC<IHome> = ({ images, descriptions }) => {
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
							{images.map((image, index: number) => (
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ amount: 0.1 }}
									variants={scrollToTop}
									className="coffe-card"
								>
									<div className="coffe-card-desc">
										<img src={image} alt="Slider1" />
										<div className="coffe-card-desc_title">
											<h3>Living Café</h3>
											<p>Savor drinks, and enjoy your time.</p>
										</div>
									</div>
									<img src={descriptions[index]} alt="Coffe card item" />
								</motion.div>
							))}
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
