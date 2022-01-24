import { FC } from 'react';
import { Product } from 'types/product';
import { Heading } from 'ui-kit/atoms/heading';
import { ProductsGrid } from 'ui-kit/atoms/products-grid';
import { ProductTile } from 'ui-kit/molecules/product-tile';
import { useLatestTabs } from './hooks';
import { LatestStyled } from './Latest.style';

const Latest: FC = () => {
	const { tabs, addToCart } = useLatestTabs();

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
