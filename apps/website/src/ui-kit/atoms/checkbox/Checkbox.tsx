import { FC, HTMLAttributes } from 'react';
import { CheckboxBox, CheckboxInput, CheckboxLabel, CheckboxStyled } from './Checkbox.style';

type Props = HTMLAttributes<HTMLLabelElement>;

const Checkbox: FC<Props> = (props: Props) => {
	const { children, ...restProps } = props;

	return (
		<CheckboxStyled {...restProps}>
			<CheckboxInput type="checkbox" />
			<CheckboxBox />
			<CheckboxLabel>{children}</CheckboxLabel>
		</CheckboxStyled>
	);
};

export { Checkbox };
