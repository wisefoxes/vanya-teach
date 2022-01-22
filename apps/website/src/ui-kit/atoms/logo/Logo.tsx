import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { LogoStyled, LogoSecondTitle } from './Logo.style';

const Logo: FC = () => {
	const { t } = useTranslation('common');

	return (
		<LogoStyled to="/">
			<span>{t('logo1')}</span>
			<LogoSecondTitle>{t('logo2')}</LogoSecondTitle>
		</LogoStyled>
	);
};

export { Logo };
