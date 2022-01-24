import { FC } from 'react';
import { useAddToCart } from 'store/cart';
import { usePopularTabs } from 'store/tabs';
import { Product } from 'types/product';
import { Heading } from 'ui-kit/atoms/heading';
import { ProductsGrid } from 'ui-kit/atoms/products-grid';
import { ProductTile } from 'ui-kit/molecules/product-tile';
import { PopularStyled } from './Popular.style';

const Popular: FC = () => {
	const tabs = usePopularTabs();
	const addToCart = useAddToCart();

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
