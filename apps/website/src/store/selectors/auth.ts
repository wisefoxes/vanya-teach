import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const selectAuth = (state: RootState) => state.auth;

const selectAuthOpen = createSelector(selectAuth, (auth) => auth.isOpen);
const selectAuthModalState = createSelector(selectAuth, (auth) => auth.modalState);

export { selectAuthOpen, selectAuthModalState };
