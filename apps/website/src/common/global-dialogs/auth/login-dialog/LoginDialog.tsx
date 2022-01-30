import { FC } from 'react';
import { useAuth } from 'store/auth';
import { Button } from 'ui-kit/atoms/button';
import { Checkbox } from 'ui-kit/atoms/checkbox';
import { Divider } from 'ui-kit/atoms/divider';
import { Heading } from 'ui-kit/atoms/heading';
import { Input } from 'ui-kit/atoms/input';
import { LoginDialogStyled, LoginForm, SignLabel } from './LoginDialog.style';

const LoginDialog: FC = () => {
	const { toggleType } = useAuth();

	return (
		<LoginDialogStyled>
			<Heading level={4}>Войти</Heading>
			<LoginForm>
				<Input placeholder="E-mail" type="email" />
				<Input placeholder="Password" type="password" />
				<Checkbox>Запомнить меня</Checkbox>
				<Button type="primary">Войти</Button>
			</LoginForm>
			<Divider />
			<SignLabel>Первый раз?</SignLabel>
			<Button onClick={toggleType}>Создать аккаунт</Button>
		</LoginDialogStyled>
	);
};

export { LoginDialog };
