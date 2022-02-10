import { FC } from 'react';
import { useAuth } from 'store/auth';
import { Button } from 'ui-kit/atoms/button';
import { Checkbox } from 'ui-kit/atoms/checkbox';
import { Divider } from 'ui-kit/atoms/divider';
import { Heading } from 'ui-kit/atoms/heading';
import { Input } from 'ui-kit/atoms/input';
import { TextButton } from 'ui-kit/atoms/text-button';
import { LoginDialogStyled, LoginForm, LoginSettings, SignLabel } from './LoginDialog.style';
import { OAuthControls } from './oauth-controls';

const LoginDialog: FC = () => {
	const { setModalState } = useAuth();

	const clickCreateAccountHandler = (): void => setModalState('registration');
	const clickForgotPasswordHandler = (): void => setModalState('forgot_password');

	return (
		<LoginDialogStyled>
			<Heading level={4}>Войти</Heading>
			<LoginForm>
				<Input placeholder="E-mail" type="email" />
				<Input placeholder="Password" type="password" />
				<LoginSettings>
					<Checkbox>Запомнить меня</Checkbox>
					<TextButton onClick={clickForgotPasswordHandler}>Забыл пароль?</TextButton>
				</LoginSettings>
				<Button type="primary">Войти</Button>
				<OAuthControls />
			</LoginForm>
			<Divider />
			<SignLabel>Первый раз?</SignLabel>
			<Button onClick={clickCreateAccountHandler}>Создать аккаунт</Button>
		</LoginDialogStyled>
	);
};

export { LoginDialog };
