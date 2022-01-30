import { rem } from 'polished';
import styled from 'styled-components';

const LoginDialogStyled = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${rem(15)};
`;

const SignLabel = styled.div`
	text-align: center;
	font-size: ${rem(18)};
	font-weight: var(--font-weight__light);
`;

export { LoginDialogStyled, SignLabel };
