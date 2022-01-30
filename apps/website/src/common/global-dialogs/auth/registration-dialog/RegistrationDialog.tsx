import { FC } from 'react';
import { useAuth } from 'store/auth';
import { Button } from 'ui-kit/atoms/button';
import { Heading } from 'ui-kit/atoms/heading';
import { Input } from 'ui-kit/atoms/input';
import { TextButton } from 'ui-kit/atoms/text-button';
import { AlreadyMember, RegistrationDialogStyled, RegistrationForm } from './RegistrationDialog.style';

const RegistrationDialog: FC = () => {
	const { toggleType } = useAuth();

	return (
		<RegistrationDialogStyled>
			<Heading level={4}>Зарегистрироваться</Heading>
			<RegistrationForm>
				<Input placeholder="Имя" />
				<Input placeholder="Фамилия" />
				<Input placeholder="E-mail" type="email" />
				<Input placeholder="Пароль" type="password" />
			</RegistrationForm>
			<Button type="primary">Присоединиться</Button>
			<AlreadyMember>
				Уже есть аккаунт?
				<TextButton onClick={toggleType}>Войти</TextButton>
			</AlreadyMember>
		</RegistrationDialogStyled>
	);
};

export { RegistrationDialog };
