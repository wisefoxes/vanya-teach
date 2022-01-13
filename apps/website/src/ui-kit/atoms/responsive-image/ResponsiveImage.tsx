import { FC } from 'react';
import { generateImageUrl } from './helpers';

type Props = {
	name: string;
	staticHost?: string;
	ratio?: string;
	ext?: 'jpg' | 'jpeg' | 'png';
	breakpoints: {
		s: number;
		m?: number;
		l?: number;
	};
};

const ResponsiveImage: FC<Props> = (props: Props) => {
	const {
		name,
		staticHost = '',
		ratio = '22/25',
		ext = 'jpg',
		breakpoints: { s, m, l },
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
			</picture>
		</figure>
	);
};

export { ResponsiveImage };
