import { motion } from 'framer-motion';
import { SliderSimple } from '../../../features/sliders/slider/simple';
import Button from '../../../components/buttons/button';
import { scrollToTop } from '../animations';
import { sliderExploreCars, sliderTitleCars } from '../data';

const Discover = () => {
	return (
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
