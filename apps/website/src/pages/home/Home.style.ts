import { bodyPadding, pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';
import { ButtonLink } from 'ui-kit/atoms/button-link';

const HomeStyled = styled.main`
	${bodyPadding}
	${pageContainer}
`;

const HomeTitle = styled.h1`
	font-size: ${rem(60)};
	font-weight: var(--font-weight__medium);
	text-align: center;
	line-height: 1.2;
`;

const HomeSubTitle = styled.h6`
	font-size: ${rem(22)};
	margin-top: ${rem(50)};
	text-align: center;
`;

const SelectCourse = styled(ButtonLink)`
	margin: ${rem(70)} auto 0;
	width: calc(100% - ${rem(70)});
`;

const BackgroundWaves = styled.div`
	position: absolute;
	bottom: 0;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffd900' fill-opacity='1' d='M0,288L24,277.3C48,267,96,245,144,224C192,203,240,181,288,149.3C336,117,384,75,432,85.3C480,96,528,160,576,160C624,160,672,96,720,58.7C768,21,816,11,864,10.7C912,11,960,21,1008,58.7C1056,96,1104,160,1152,170.7C1200,181,1248,139,1296,144C1344,149,1392,203,1416,229.3L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z'%3E%3C/path%3E%3C/svg%3E%0A");
	background-position-x: ${rem(-2500)};
	background-size: auto ${rem(1000)};
	height: 80%;
	width: 100%;
	left: 0;
	z-index: -1;
`;

export { HomeStyled, HomeTitle, HomeSubTitle, SelectCourse, BackgroundWaves };
