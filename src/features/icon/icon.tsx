import type { FC, DOMAttributes } from 'react';
import clsx from 'clsx';
import { memo, useEffect, useRef } from 'react';

import { formatToStringWithPx } from '../../utils/format';
// import type { IconType } from './type';
// import { iconTypes } from './type';
import type { TColor } from './types';

// EColorType, ETextColor
import './Icon.scss';

// const getIcon = (type: string) => iconTypes.get(type);

interface IProps extends DOMAttributes<HTMLSpanElement> {
	className?: string;
	color?: TColor;
	dataTestId?: string;
	height?: number;
	size?: number;
	// type: IconType;
	width?: number;
}

const Component: FC<IProps> = ({
	className,
	color = '#fff',
	dataTestId = 'uikit__icon',
	height,
	width,
	size,
	// type,
	...rest
}) => {
	const iconRef = useRef<HTMLDivElement>(null);
	const mainStyles = clsx(`${'dark'}-${color}`);

	useEffect(() => {
		if (iconRef.current) {
			if (size && !height && !width) {
				iconRef.current.style.setProperty(
					'--icon-height',
					formatToStringWithPx(size)
				);
				iconRef.current.style.setProperty(
					'--icon-width',
					formatToStringWithPx(size)
				);
			} else if (!size && height && width) {
				iconRef.current.style.setProperty(
					'--icon-height',
					formatToStringWithPx(height)
				);
				iconRef.current.style.setProperty(
					'--icon-width',
					formatToStringWithPx(width)
				);
			}
		}
	}, [height, size, width]);

	return (
		<div
			className={clsx('Icon', className, mainStyles)}
			data-testid={dataTestId}
			ref={iconRef}
			{...rest}
		>
			{/* {getIcon(type)} */}
		</div>
	);
};

export const Icon = memo(Component);
