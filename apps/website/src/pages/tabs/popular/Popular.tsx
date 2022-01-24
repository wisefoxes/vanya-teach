import { FC } from 'react';
import { addToCartAsync } from 'store/cart/cart-thunks';
import { useAppDispatch } from 'store/hooks';
import { Product } from 'types/product';
import { Heading } from 'ui-kit/atoms/heading';
import { ProductsGrid } from 'ui-kit/atoms/products-grid';
import { ProductTile } from 'ui-kit/molecules/product-tile';
import { PopularStyled } from './Popular.style';

const Popular: FC = () => {
	const dispatch = useAppDispatch();

	const clickAddToCartHandler = (product: Product): void => {
		dispatch(addToCartAsync(product));
	};

	return (
		<PopularStyled>
			<Heading>Чаще всего покупают</Heading>
			<ProductsGrid>
				<ProductTile
					title="Hozier - Take me to church"
					description="Формат: PDF + GPX"
					complexity={9}
					price={349}
					onAddToCart={clickAddToCartHandler}
				/>
				<ProductTile
					title="Linkin Park - Numb"
					description="Формат: PDF + GPX"
					complexity={9}
					price={349}
					onAddToCart={clickAddToCartHandler}
				/>
			</ProductsGrid>
		</PopularStyled>
	);
};

export { Popular };
