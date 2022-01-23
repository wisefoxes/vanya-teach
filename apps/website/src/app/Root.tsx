import { StaticProvider } from 'core/static/static-context';
import i18next from 'i18next';
import { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';
import { App } from './app';
import { GlobalStyles } from './GlobalStyles';
import { setupLocalization } from './initialization';

export const Root: FC = () => {
	return (
		<Provider store={store}>
			<StaticProvider>
				<BrowserRouter>
					<I18nextProvider i18n={i18next}>
						<GlobalStyles />
						<App />
					</I18nextProvider>
				</BrowserRouter>
			</StaticProvider>
		</Provider>
	);
};

(async (): Promise<void> => {
	await setupLocalization();
})();
