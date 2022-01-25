import { rem } from 'polished';
import styled from 'styled-components';

const DialogLayer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 3;
`;

const Modal = styled.div`
	background-color: var(--color__basic-100);
	position: absolute;
	width: 100%;
	box-sizing: border-box;
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

export { DialogLayer, Modal, CrossButton };
