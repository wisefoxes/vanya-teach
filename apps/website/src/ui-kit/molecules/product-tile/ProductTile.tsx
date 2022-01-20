import { FC, HTMLAttributes } from 'react';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { AddToCart, Complexity, Description, ImageWrapper, Price, ProductTileStyled, ProductTitle } from './ProductTile.style';

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
			<ImageWrapper>
				<ResponsiveImage name="hozier" breakpoints={{ s: 353 }} ext="jpg" ratio="1/1" />
				<AddToCart type="primary">В корзину!</AddToCart>
			</ImageWrapper>
			<ProductTitle>{title}</ProductTitle>
			<Description>{description}</Description>
			<Complexity>Сложность: {complexity} фингербаллов</Complexity>
			<Price>${price}</Price>
		</ProductTileStyled>
	);
};

export { ProductTile };
