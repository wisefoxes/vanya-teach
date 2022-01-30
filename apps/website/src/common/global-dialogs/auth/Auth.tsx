import { FC } from 'react';
import { useAuth } from 'store/auth';
import { Dialog } from 'ui-kit/molecules/dialog';
import { AuthDialog } from './Auth.style';

const Auth: FC = () => {
	const { close } = useAuth();

	return (
		<Dialog onClose={close}>
			<AuthDialog>div</AuthDialog>
		</Dialog>
	);
};

export { Auth };
