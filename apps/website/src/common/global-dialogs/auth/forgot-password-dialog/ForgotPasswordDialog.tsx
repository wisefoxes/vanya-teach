import { FC } from 'react';
import { useAuth } from 'store/auth';
import { Button } from 'ui-kit/atoms/button';
import { Heading } from 'ui-kit/atoms/heading';
import { Input } from 'ui-kit/atoms/input';
import { ForgotPasswordDialogStyled, ForgotPasswordForm, ReturnBackButton } from './ForgotPasswordDialog.style';

const ForgotPasswordDialog: FC = () => {
	const { setModalState } = useAuth();

	const clickBackToLoginHandler = (): void => setModalState('login');

	return (
		<ForgotPasswordDialogStyled>
			<Heading level={4}>Забыл пароль?</Heading>
			<div>Со всеми случается. Мы поможем решить эту проблему</div>
			<ForgotPasswordForm>
				<Input type="email" placeholder="E-mail" />
				<Button type="primary">Обновить пароль</Button>
			</ForgotPasswordForm>
			<ReturnBackButton onClick={clickBackToLoginHandler}>Вернуться к окну входа</ReturnBackButton>
		</ForgotPasswordDialogStyled>
	);
};

export { ForgotPasswordDialog };
