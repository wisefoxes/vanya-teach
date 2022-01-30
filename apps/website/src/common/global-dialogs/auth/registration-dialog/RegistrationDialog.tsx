import { FC } from 'react';
import { useAuth } from 'store/auth';
import { Button } from 'ui-kit/atoms/button';
import { Heading } from 'ui-kit/atoms/heading';
import { RegistrationDialogStyled } from './RegistrationDialog.style';

const RegistrationDialog: FC = () => {
	const { toggleType } = useAuth();

	return (
		<RegistrationDialogStyled>
			<Heading level={4}>Зарегистрироваться</Heading>
			<Button onClick={toggleType}>Войти</Button>
		</RegistrationDialogStyled>
	);
};

export { RegistrationDialog };
