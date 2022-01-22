import { transitionValue } from 'design/tools/transitions';
import { rem } from 'polished';
import { TransitionStatus } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { Overlay } from 'ui-kit/atoms/overlay';

const DialogTransitionTime = 300;

const DialogLayer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 3;
`;

const Modal = styled.div<{ transitionStatus: TransitionStatus }>`
	background-color: var(--color__basic-100);
	position: absolute;
	width: 100%;
	padding: ${rem(30)} ${rem(20)};
	box-sizing: border-box;
	transition: transform ${DialogTransitionTime}ms ease-in-out;

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
	transition: opacity ${DialogTransitionTime}ms ease-in-out;

	${transitionValue(
		css`
			opacity: 0;
		`,
		css`
			opacity: 0.4;
		`,
	)}
`;

const CrossButton = styled.button`
	border: none;
	background-color: transparent;
	width: ${rem(30)};
	box-sizing: content-box;
	position: absolute;
	padding: ${rem(15)};
	right: ${rem(5)};
	cursor: pointer;
	top: ${rem(5)};
`;

export { DialogLayer, DialogTransitionTime, Modal, OverlayAnimated, CrossButton };
