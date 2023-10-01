import { CSSProperties } from 'react';
import './card.sass';

interface IImage {
	src: string;
	alt: string;
}

interface IDescription {
	title: string;
	desc: string;
}

interface ICard {
	image: IImage;
	description: IDescription;
	classNameWrapper?: string;
	classNameImage?: string;
	style?: CSSProperties;
}

const Card: React.FC<ICard> = ({
	image,
	description,
	classNameWrapper,
	classNameImage,
	style,
}) => {
	return (
		<div style={style} className={`card ${classNameWrapper}`}>
			<img className={classNameImage} src={image.src} alt={image.alt} />
			<div className="description">
				<h3>{description.title}</h3>
				<p>{description.desc}</p>
			</div>
		</div>
	);
};

export default Card;
