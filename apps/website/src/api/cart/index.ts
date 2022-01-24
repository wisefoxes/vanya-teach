import { Product } from 'types/product';

async function fetchAddProductToCart(product: Product): Promise<Product> {
	const { data } = await Promise.resolve({ data: product });

	return data;
}

export { fetchAddProductToCart };
