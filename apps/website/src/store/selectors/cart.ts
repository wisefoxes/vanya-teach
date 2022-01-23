import { RootState } from 'store/store';

export const selectCartUpdateVisible = (state: RootState): boolean => state.cart.cartUpdateVisible;
