import { FC, HTMLAttributes } from 'react';
import { HeadingStyled } from './Heading.style';

type Props = {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
} & HTMLAttributes<HTMLHeadingElement>;

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Heading: FC<Props> = (props: Props) => {
	const { children, level = 1, ...restProps } = props;

	const tag: HeadingType = `h${level}`;

	return (
		<HeadingStyled as={tag} {...restProps}>
			{children}
		</HeadingStyled>
	);
};

export { Heading };
