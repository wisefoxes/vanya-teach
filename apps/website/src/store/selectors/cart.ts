import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const selectCart = (state: RootState) => state.cart;

const selectAddedProduct = createSelector(selectCart, (cart) => cart.addedProduct);

export { selectAddedProduct };
