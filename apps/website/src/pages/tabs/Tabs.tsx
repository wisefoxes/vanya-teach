import { CartUpdate } from 'common/cart/cart-update';
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
			<CartUpdate />
			<TopSection>
				<TitleStyled>Табы от Вани!</TitleStyled>
				<DescriptionStyled>В каталоге имеется более 40 табов различных композиций от самых популярных исполнителей</DescriptionStyled>
				<SelectTabs to="#tabs" size="large">
					Выбрать табы
				</SelectTabs>
				<ResponsiveImage name="vanya-guitar2" staticHost={staticHost} breakpoints={{ s: 727 }} ext="png" ratio="727/423" />
			</TopSection>
			<Popular />
			<Latest />
			<FullList />
		</TabsStyled>
	);
};

export { Tabs };
