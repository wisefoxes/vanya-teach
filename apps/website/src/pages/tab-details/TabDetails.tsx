import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTabDetails } from 'store/tabs';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { Content, TabDetailsStyled, TabMetainfo, TitleStyled } from './TabDetails.style';

const TabDetails: FC = () => {
	const { id = '' } = useParams<'id'>();
	const tab = useTabDetails(id);

	if (!tab) {
		return <div>Loading...</div>;
	}

	return (
		<TabDetailsStyled>
			<ResponsiveImage name="tab-name" breakpoints={{ s: 300 }} ratio="1/1" ext="jpeg" />
			<Content>
				<TitleStyled level={3}>{tab.name}</TitleStyled>
				<TabMetainfo>
					[{tab.id}] {tab.price}
				</TabMetainfo>
			</Content>
		</TabDetailsStyled>
	);
};

export { TabDetails };
