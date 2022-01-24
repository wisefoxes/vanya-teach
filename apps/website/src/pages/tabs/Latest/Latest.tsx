import { FC } from 'react';
import { useAddToCart } from 'store/cart';
import { useLatestTabs } from 'store/tabs';
import { Product } from 'types/product';
import { Heading } from 'ui-kit/atoms/heading';
import { ProductsGrid } from 'ui-kit/atoms/products-grid';
import { ProductTile } from 'ui-kit/molecules/product-tile';
import { LatestStyled } from './Latest.style';

const Latest: FC = () => {
	const tabs = useLatestTabs();
	const addToCart = useAddToCart();

	const clickAddToCartHandler = (product: Product) => (): void => addToCart(product);

	const products = tabs.map((tab) => (
		<ProductTile key={tab.id} title={tab.name} price={tab.price} onAddToCart={clickAddToCartHandler(tab)} />
	));

	return (
		<LatestStyled>
			<Heading>Недавно добавленные табы</Heading>
			<ProductsGrid>{products}</ProductsGrid>
		</LatestStyled>
	);
};

export { Latest };
