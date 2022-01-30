import { rem } from 'polished';
import styled from 'styled-components';

const LoginDialogStyled = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${rem(15)};
`;

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
`;

const SignLabel = styled.div`
	text-align: center;
	font-size: ${rem(18)};
	font-weight: var(--font-weight__light);
`;

const LoginSettings = styled.div`
	display: flex;
	justify-content: space-between;
`;

export { LoginDialogStyled, LoginForm, LoginSettings, SignLabel };
