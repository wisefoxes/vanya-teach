import { FC } from 'react';
import { useAuth } from 'store/auth';
import { Dialog } from 'ui-kit/molecules/dialog';
import { AuthDialog } from './Auth.style';
import { LoginDialog } from './login-dialog';
import { RegistrationDialog } from './registration-dialog';

const Auth: FC = () => {
	const { close, isRegistration } = useAuth();

	const dialog = isRegistration ? <RegistrationDialog /> : <LoginDialog />;

	return (
		<Dialog onClose={close}>
			<AuthDialog>{dialog}</AuthDialog>
		</Dialog>
	);
};

export { Auth };
