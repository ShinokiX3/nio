import { motion } from 'framer-motion';
import Button from '../../../../components/buttons/button';
import Card from '../../../../components/cards/card';
import { IImage } from '../../home';
import { scrollToTop } from '../../animations';

import './about.sass';

interface IAbout {
	banner: string;
	title: string;
	subtitle: string;
	text: string;
	slides: IImage[];
}

const About: React.FC<IAbout> = ({ banner, title, text, subtitle, slides }) => {
	return (
		<section className="section-about">
			<div className="section-about_wrapper">
				<div className="about-banner">
					<img className="image-scale" src={banner} alt="Nio power banner" />
				</div>
				<div className="about-message">
					<img
						className="about-message_title"
						src={title}
						alt="Nio power title"
					/>
					<p className="about-message_subtitle">{subtitle}</p>
					<p className="about-message_text">{text}</p>
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
				{slides.map(({ image, description }, index) => (
					<motion.div
						key={image.src}
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
	);
};

export default About;
