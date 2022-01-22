import { createAsyncThunk } from '@reduxjs/toolkit';

const addToCartAsync = createAsyncThunk('cart/add', async () => await Promise.resolve());

export { addToCartAsync };
