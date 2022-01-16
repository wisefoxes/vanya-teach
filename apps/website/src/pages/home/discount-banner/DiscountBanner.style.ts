import { pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';
import { Button } from 'ui-kit/atoms/button';

const BannerStyled = styled.div`
	${pageContainer}
	background-color: var(--color__primary-500);
	padding-top: ${rem(105)};
	padding-bottom: ${rem(105)};
	margin-top: ${rem(20)};
`;

const SubHeader = styled.div`
	font-size: ${rem(22)};
	text-align: center;
	margin-top: ${rem(30)};
`;

const GetDiscount = styled(Button)`
	margin-top: ${rem(30)};
`;

export { BannerStyled, SubHeader, GetDiscount };
