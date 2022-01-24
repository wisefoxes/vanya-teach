import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddProductToCart } from 'api/cart';
import { Product } from 'types/product';

const addToCartAsync = createAsyncThunk<Product, Product>('cart/add', async (product: Product) => await fetchAddProductToCart(product));

export { addToCartAsync };
