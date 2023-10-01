import clsx from 'clsx';
import { CSSProperties } from 'react';
import './button.sass';

interface IButton {
	type?: 'ease' | 'bordered' | 'emphasized';
	color?: 'white' | 'black';
	backgroundColor?: string;
	className?: string;
	style?: CSSProperties;
	text: string;
	handler: () => void;
	children?: React.ReactNode;
}

const Button: React.FC<IButton> = ({
	type = 'ease',
	color = 'black',
	text,
	style,
	handler,
	children,
}) => {
	return (
		<button
			className={clsx('custom-button', {
				[`bordered`]: type === 'bordered',
				[`emphasized`]: type === 'emphasized',
				[`ease`]: type === 'ease',
				[`white`]: color === 'white',
				[`black`]: color === 'black',
			})}
			style={style}
			onClick={handler}
		>
			{children}
			{text}
		</button>
	);
};

export default Button;
