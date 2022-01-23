import { createAsyncThunk } from '@reduxjs/toolkit';

const addToCartAsync = createAsyncThunk<
	{
		id: '123';
	},
	string
>(
	'cart/add',
	async (_id: string) =>
		await Promise.resolve({
			id: '123',
		}),
);

export { addToCartAsync };
