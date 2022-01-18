import { FC } from 'react';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { Content, TabDetailsStyled, TabMetainfo, TitleStyled } from './TabDetails.style';

const TabDetails: FC = () => {
	return (
		<TabDetailsStyled>
			<ResponsiveImage name="tab-name" breakpoints={{ s: 300 }} ratio="1/1" ext="jpeg" />
			<Content>
				<TitleStyled level={3}>Artist - Track Name</TitleStyled>
				<TabMetainfo>Tab meta info</TabMetainfo>
			</Content>
		</TabDetailsStyled>
	);
};

export { TabDetails };
