import { transitionValue } from 'lib/animation/transition-status';
import { rem } from 'polished';
import { TransitionStatus } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { Overlay } from 'ui-kit/atoms/overlay';
import { MobileMenu } from './mobile-menu';

const MobileMenuTransitionTime = 300;

const HeaderStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: var(--color__basic-100);
	padding: ${rem(20)};
	box-sizing: border-box;
	z-index: 3;
`;

const MobileMenuAnimated = styled(MobileMenu)<{ transitionStatus: TransitionStatus }>`
	position: fixed;
	top: ${rem(69)};
	width: 100%;
	z-index: 2;
	left: 0;
	transition: transform ${MobileMenuTransitionTime}ms ease-in-out;

	${transitionValue(
		css`
			transform: translateY(-100%);
		`,
		css`
			transform: translateY(0);
		`,
	)};
`;

const OverlayAnimated = styled(Overlay)<{ transitionStatus: TransitionStatus }>`
	transition: opacity ${MobileMenuTransitionTime}ms ease-in-out;

	${transitionValue(
		css`
			opacity: 0;
		`,
		css`
			opacity: 0.4;
		`,
	)}
`;

const HeaderContent = styled.div`
	max-width: var(--max-width);
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export { HeaderStyled, HeaderContent, MobileMenuAnimated, OverlayAnimated, MobileMenuTransitionTime };
