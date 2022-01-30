import { hideVisually, rem } from 'polished';
import styled from 'styled-components';

const CheckboxStyled = styled.label`
	padding-left: ${rem(24)};
	cursor: pointer;
`;

const CheckboxBox = styled.span`
	border: ${rem(2)} solid var(--color__basic-900);
	position: absolute;
	width: ${rem(20)};
	height: ${rem(20)};
	margin-left: ${rem(-24)};
	box-sizing: border-box;
	opacity: 0.6;

	&::after {
		display: none;
		content: '';
		position: absolute;
		border-style: solid;
		border-color: var(--color__basic-900);
		border-width: 0 ${rem(2)} ${rem(2)} 0;
		width: ${rem(3)};
		height: ${rem(8)};
		top: ${rem(2)};
		left: ${rem(6)};
		transform: rotate(45deg);
	}
`;

const CheckboxLabel = styled.span`
	line-height: 1.3;
`;

const CheckboxInput = styled.input`
	${hideVisually()}

	&:checked + ${CheckboxBox} {
		opacity: 1;

		&::after {
			display: block;
		}
	}
`;

export { CheckboxStyled, CheckboxBox, CheckboxLabel, CheckboxInput };
