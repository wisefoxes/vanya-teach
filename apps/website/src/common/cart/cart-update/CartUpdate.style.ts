import { rem } from 'polished';
import styled from 'styled-components';
import { Heading } from 'ui-kit/atoms/heading';

const CartUpdateStyled = styled.section`
	padding: ${rem(15)} ${rem(20)} ${rem(30)};
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
`;

const Title = styled(Heading)`
	padding: 0 ${rem(40)};
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr auto;
	gap: ${rem(10)};
	margin-top: ${rem(20)};
`;

const Subtotal = styled.div`
	display: flex;
	justify-content: space-between;
`;

export { CartUpdateStyled, Title, Content, Subtotal };
