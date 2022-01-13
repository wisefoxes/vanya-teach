import { StaticProvider } from 'core/static/static-context';
import i18next from 'i18next';
import { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { GlobalStyles } from './GlobalStyles';
import { setupLocalization } from './initialization';

export const Root: FC = () => {
	return (
		<StaticProvider>
			<BrowserRouter>
				<I18nextProvider i18n={i18next}>
					<GlobalStyles />
					<App />
				</I18nextProvider>
			</BrowserRouter>
		</StaticProvider>
	);
};

(async (): Promise<void> => {
	await setupLocalization();
})();
