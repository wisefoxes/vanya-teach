import { RootState } from 'store/store';

export const selectCartItems = (state: RootState): string[] => Object.keys(state.cart.items);
