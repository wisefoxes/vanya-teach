import { FC } from 'react';
import { Product } from 'types/product';
import { Heading } from 'ui-kit/atoms/heading';
import { ProductsGrid } from 'ui-kit/atoms/products-grid';
import { ProductTile } from 'ui-kit/molecules/product-tile';
import { usePopularTabs } from './hooks';
import { PopularStyled } from './Popular.style';

const Popular: FC = () => {
	const { tabs, addToCart } = usePopularTabs();

	const clickAddToCartHandler = (product: Product) => (): void => addToCart(product);

	const products = tabs.map((tab) => (
		<ProductTile key={tab.id} title={tab.name} price={tab.price} onAddToCart={clickAddToCartHandler(tab)} />
	));

	return (
		<PopularStyled>
			<Heading>Чаще всего покупают</Heading>
			<ProductsGrid>{products}</ProductsGrid>
		</PopularStyled>
	);
};

export { Popular };
