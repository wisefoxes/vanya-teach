import { rem } from 'polished';
import styled from 'styled-components';
import { TextButton } from 'ui-kit/atoms/text-button';

const ForgotPasswordDialogStyled = styled.section`
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
`;

const ForgotPasswordForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
	margin-top: ${rem(20)};
`;

const ReturnBackButton = styled(TextButton)`
	margin-top: ${rem(20)};
`;

export { ForgotPasswordDialogStyled, ForgotPasswordForm, ReturnBackButton };
