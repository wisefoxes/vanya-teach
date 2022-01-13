import { FC, HTMLAttributes } from 'react';
import { generateImageUrl } from './helpers';
import { ImageStyled } from './ResponsiveImage.style';

type Props = {
	name: string;
	alt?: string;
	staticHost?: string;
	ratio?: string;
	ext?: 'jpg' | 'jpeg' | 'png';
	breakpoints: {
		s: number;
		m?: number;
		l?: number;
	};
} & HTMLAttributes<HTMLImageElement>;

const ResponsiveImage: FC<Props> = (props: Props) => {
	const {
		name,
		alt = 'unknown image',
		staticHost = '',
		ratio = '22/25',
		ext = 'jpg',
		breakpoints: { s, m, l },
		...restProps
	} = props;

	const { s: sImage, m: mImage, l: lImage } = generateImageUrl(name, { s, m, l }, ratio, ext);

	const smallSource = s && <source srcSet={`${staticHost}/${sImage}`} />;
	const mediumSource = m && <source srcSet={`${staticHost}/${mImage}`} />;
	const largeSource = l && <source srcSet={`${staticHost}/${lImage}`} />;

	return (
		<figure>
			<picture>
				{largeSource}
				{mediumSource}
				{smallSource}
				<ImageStyled alt={alt} src={`${staticHost}/${sImage}`} {...restProps} />
			</picture>
		</figure>
	);
};

export { ResponsiveImage };
