import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const selectCart = (state: RootState) => state.cart;

const selectCartUpdating = createSelector(selectCart, (cart) => cart.updating);
const selectAddedProduct = createSelector(selectCart, (cart) => cart.addedProduct);

export { selectCartUpdating, selectAddedProduct };
