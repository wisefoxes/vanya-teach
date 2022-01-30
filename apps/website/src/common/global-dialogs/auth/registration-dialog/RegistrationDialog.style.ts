import { rem } from 'polished';
import styled from 'styled-components';
import { Checkbox } from 'ui-kit/atoms/checkbox';

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

const ReceiveUpdatesCheckbox = styled(Checkbox)`
	color: var(--color__basic-700);
	font-weight: var(--font-weight__light);
	font-size: ${rem(14)};
	line-height: 1.5;
`;

const AlreadyMember = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${rem(10)};
	font-size: ${rem(18)};
`;

export { RegistrationDialogStyled, RegistrationForm, ReceiveUpdatesCheckbox, AlreadyMember };
