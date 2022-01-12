import { FC, PropsWithChildren } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const Button: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { children } = props;

	return <button>{children}</button>;
};

export { Button };
