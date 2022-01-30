import { FC, HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { InputStyled } from './Input.style';
import type { InputType } from './types';

type Props = {
	appearance?: InputType;
	type?: HTMLInputTypeAttribute;
} & HTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = (props: Props) => {
	const { appearance = 'basic', type = 'text' } = props;

	return <InputStyled $appearance={appearance} type={type} {...props} />;
};

export { Input };
