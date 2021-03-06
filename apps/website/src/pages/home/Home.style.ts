import { bodyPadding, pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';
import { ButtonLink } from 'ui-kit/atoms/button-link';
import { ReactComponent as MainWaves } from 'ui-kit/icons/main-waves.svg';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { Heading } from 'ui-kit/atoms/heading';

const HomeStyled = styled.main`
	${bodyPadding}

	max-width: var(--max-width);
	margin: 0 auto;
`;

const HomeTitle = styled(Heading)`
	${pageContainer}
	font-weight: var(--font-weight__medium);
	text-align: center;
	line-height: 1.2;
`;

const HomeSubTitle = styled(Heading)`
	${pageContainer}
	margin-top: ${rem(50)};
`;

const SelectCourse = styled(ButtonLink)`
	margin: ${rem(70)} auto 0;
	width: calc(100% - ${rem(70)});
`;

const ImageWrapper = styled.div`
	position: relative;
	overflow-x: hidden;
	margin-top: ${rem(30)};
`;

const WavesBackground = styled(MainWaves)`
	position: absolute;
	z-index: -1;
	bottom: 0;
	height: 95%;
	transform: translate(${rem(-800)}, ${rem(-10)});
`;

const MainImage = styled(ResponsiveImage)`
	margin: ${rem(60)} auto 0;
`;

export { HomeStyled, HomeTitle, HomeSubTitle, SelectCourse, WavesBackground, ImageWrapper, MainImage };
