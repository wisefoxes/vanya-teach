import { FC } from 'react';
import { useAuth } from 'store/auth';
import { Button } from 'ui-kit/atoms/button';
import { Divider } from 'ui-kit/atoms/divider';
import { Heading } from 'ui-kit/atoms/heading';
import { LoginDialogStyled } from './LoginDialog.style';

const LoginDialog: FC = () => {
	const { toggleType } = useAuth();

	return (
		<LoginDialogStyled>
			<Heading level={4}>Войти</Heading>
			<Divider />
			<Button onClick={toggleType}>Создать аккаунт</Button>
		</LoginDialogStyled>
	);
};

export { LoginDialog };
