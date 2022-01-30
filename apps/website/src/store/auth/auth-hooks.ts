import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectAuthOpen } from 'store/selectors/auth';
import { authActions } from './auth-slice';

function useAuth(): { isOpen: boolean; close: () => void; open: () => void } {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector(selectAuthOpen);

	const close = (): void => {
		dispatch(authActions.close());
	};

	const open = (): void => {
		dispatch(authActions.open());
	};

	return { isOpen, close, open };
}

export { useAuth };
