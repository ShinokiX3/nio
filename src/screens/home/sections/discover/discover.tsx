import './discover.sass';
import { motion } from 'framer-motion';
import { SliderSimple } from '@features/sliders/slider/simple';
import { scrollToTop } from '../../animations';
import { useMediaQuery } from 'react-responsive';
import Button from '@components/buttons/button';

interface IDiscover {
	title: string;
	subtitle: string;
	sliderTitles: string[];
	sliderCars: {
		desktop: string[];
		mobile: string[];
	};
}

const Discover: React.FC<IDiscover> = ({
	title,
	subtitle,
	sliderTitles,
	sliderCars,
}) => {
	// TODO: media variables to constants
	const isMobileScreen = useMediaQuery({ query: '(max-width: 1024px)' });

	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.3 }}
			className="section-discover"
		>
			<motion.div custom={1} variants={scrollToTop} className="car-header">
				<h3 className="section-discover_title">{title}</h3>
				{isMobileScreen ? (
					<p className="section-discover_subtitle">{subtitle}</p>
				) : null}
			</motion.div>
			<motion.div custom={2} variants={scrollToTop} className="car-titles">
				{sliderTitles.map((image) => (
					<img key={image} src={image} alt="Car title" />
				))}
			</motion.div>
			<motion.div custom={3} variants={scrollToTop}>
				<SliderSimple
					arrows={true}
					dots={false}
					fade={false}
					images={!isMobileScreen ? sliderCars.desktop : sliderCars.mobile}
					infinite={true}
					autoplay={false}
					beforeChange={(_, next) => {
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
	);
};

export default Discover;
