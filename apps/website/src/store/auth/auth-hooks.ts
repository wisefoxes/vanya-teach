import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectAuthOpen, selectAuthModalState } from 'store/selectors/auth';
import { authActions } from './auth-slice';
import { ModalState } from './types';

function useAuth(): {
	isOpen: boolean;
	modalState: ModalState;
	close: () => void;
	open: () => void;
	setModalState: (type: ModalState) => void;
} {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector(selectAuthOpen);
	const modalState = useAppSelector(selectAuthModalState);

	const close = (): void => {
		dispatch(authActions.close());
	};

	const open = (): void => {
		dispatch(authActions.open());
	};

	const setModalState = (type: ModalState): void => {
		dispatch(authActions.setType(type));
	};

	return { isOpen, modalState, close, open, setModalState };
}

export { useAuth };
