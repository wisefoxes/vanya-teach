import styled from 'styled-components';

const OverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: var(--color__basic-900);
	opacity: 0.4;
	z-index: 1;
`;

export { OverlayStyled };
