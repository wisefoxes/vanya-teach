import { FC } from 'react';
import { useAuth } from 'store/auth';
import { Dialog } from 'ui-kit/molecules/dialog';
import { AuthDialog } from './Auth.style';
import { ForgotPasswordDialog } from './forgot-password-dialog';
import { LoginDialog } from './login-dialog';
import { RegistrationDialog } from './registration-dialog';

const Auth: FC = () => {
	const { close, modalState } = useAuth();

	const dialog = (
		<>
			{modalState === 'login' && <LoginDialog />}
			{modalState === 'registration' && <RegistrationDialog />}
			{modalState === 'forgot_password' && <ForgotPasswordDialog />}
		</>
	);

	return (
		<Dialog onClose={close}>
			<AuthDialog>{dialog}</AuthDialog>
		</Dialog>
	);
};

export { Auth };
