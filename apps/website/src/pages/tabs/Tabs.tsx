import { useStaticInfo } from 'core/static/static-context';
import { FC } from 'react';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { FullList } from './full-list';
import { Latest } from './latest';
import { Popular } from './popular';
import { DescriptionStyled, SelectTabs, TabsStyled, TitleStyled, TopSection } from './Tabs.style';

const Tabs: FC = () => {
	const { staticHost } = useStaticInfo();

	return (
		<TabsStyled>
			<TopSection>
				<TitleStyled>Табы от Вани!</TitleStyled>
				<DescriptionStyled>В каталоге имеется более 40 табов различных композиций от самых популярных исполнителей</DescriptionStyled>
				<SelectTabs to="#tabs" size="large">
					Выбрать табы
				</SelectTabs>
				<ResponsiveImage name="vanya-guitar2" staticHost={staticHost} breakpoints={{ s: 500 }} ext="png" ratio="500/291" />
			</TopSection>
			<Popular />
			<Latest />
			<FullList />
		</TabsStyled>
	);
};

export { Tabs };
