import { pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';
import { Heading } from 'ui-kit/atoms/heading';

const TabDetailsStyled = styled.main`
	padding-top: ${rem(100)};
`;

const Content = styled.section`
	padding: ${rem(30)} 0;
	${pageContainer}
`;

const TitleStyled = styled(Heading)`
	text-align: left;
`;

const TabMetainfo = styled.div`
	color: var(--color__basic-600);
	font-size: ${rem(12)};
`;

export { TabDetailsStyled, Content, TitleStyled, TabMetainfo };
