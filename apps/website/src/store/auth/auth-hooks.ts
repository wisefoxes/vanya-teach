import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectAuthOpen, selectRegistrationType } from 'store/selectors/auth';
import { authActions } from './auth-slice';

function useAuth(): { isOpen: boolean; isRegistration: boolean; close: () => void; open: () => void; toggleType: () => void } {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector(selectAuthOpen);
	const isRegistration = useAppSelector(selectRegistrationType);

	const close = (): void => {
		dispatch(authActions.close());
	};

	const open = (): void => {
		dispatch(authActions.open());
	};

	const toggleType = (): void => {
		dispatch(authActions.toggleType());
	};

	return { isOpen, isRegistration, close, open, toggleType };
}

export { useAuth };
