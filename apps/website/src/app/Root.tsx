import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { GlobalStyles } from './GlobalStyles';

export const Root: FC = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<App />
		</BrowserRouter>
	);
};
