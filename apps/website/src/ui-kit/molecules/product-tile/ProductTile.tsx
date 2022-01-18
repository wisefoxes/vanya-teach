import { FC, HTMLAttributes } from 'react';
import { Button } from 'ui-kit/atoms/button';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { Complexity, Description, Price, ProductTileStyled, ProductTitle } from './ProductTile.style';

type Props = {
	title: string;
	description?: string;
	complexity?: number;
	price?: number;
} & HTMLAttributes<HTMLDivElement>;

const ProductTile: FC<Props> = (props: Props) => {
	const { title, description = '', complexity = 7, price } = props;

	return (
		<ProductTileStyled>
			<ResponsiveImage name="hozier" breakpoints={{ s: 300 }} ext="jpg" ratio="1/1" />
			<ProductTitle>{title}</ProductTitle>
			<Description>{description}</Description>
			<Complexity>Сложность: {complexity} фингербаллов</Complexity>
			<Price>${price}</Price>
			<Button>Подробнее</Button>
			<Button type="primary">Купить табы</Button>
		</ProductTileStyled>
	);
};

export { ProductTile };
