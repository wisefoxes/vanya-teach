import { pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';
import { ButtonLink } from 'ui-kit/atoms/button-link';
import { Heading } from 'ui-kit/atoms/heading';
import WavesIcon from 'ui-kit/icons/main-waves.svg';

const TabsStyled = styled.main`
	padding-top: ${rem(200)};
	max-width: var(--max-width);
	margin: 0 auto;
`;

const TopSection = styled.section`
	${pageContainer}
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
	background-image: url(${WavesIcon});
	background-repeat: no-repeat;
	background-size: cover;
	background-position-x: -700px;
`;

const TitleStyled = styled(Heading)`
	font-size: ${rem(75)};
`;

const DescriptionStyled = styled.div`
	text-align: center;
	line-height: 1.6;
	font-size: ${rem(22)};
	margin-top: ${rem(30)};
`;

const SelectTabs = styled(ButtonLink)``;

export { TabsStyled, TitleStyled, DescriptionStyled, SelectTabs, TopSection };
