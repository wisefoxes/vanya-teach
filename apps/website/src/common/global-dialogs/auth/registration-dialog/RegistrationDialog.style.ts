import { rem } from 'polished';
import styled from 'styled-components';

const RegistrationDialogStyled = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
`;

const RegistrationForm = styled.form`
	margin-top: ${rem(20)};
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
`;

const AlreadyMember = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${rem(10)};
	font-size: ${rem(18)};
`;

export { RegistrationDialogStyled, RegistrationForm, AlreadyMember };
