import { FC } from 'react';
import { Product } from 'types/product';
import { Heading } from 'ui-kit/atoms/heading';
import { ProductsGrid } from 'ui-kit/atoms/products-grid';
import { ProductTile } from 'ui-kit/molecules/product-tile';
import { FullListStyled } from './FullList.style';
import { useAllTabs } from './hooks';

const FullList: FC = () => {
	const { tabs, addToCart } = useAllTabs();

	const clickAddToCartHandler = (product: Product) => (): void => addToCart(product);

	const products = tabs.map((tab) => (
		<ProductTile key={tab.id} title={tab.name} price={tab.price} onAddToCart={clickAddToCartHandler(tab)} />
	));

	return (
		<FullListStyled>
			<Heading>Выбери нужные тебе табы и оплати в 3 клика</Heading>
			<ProductsGrid>{products}</ProductsGrid>
		</FullListStyled>
	);
};

export { FullList };
