import { useStaticInfo } from 'core/static/static-context';
import { FC, HTMLAttributes } from 'react';
import { ButtonLink } from 'ui-kit/atoms/button-link';
import { Heading } from 'ui-kit/atoms/heading';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { CourseArticleStyled, CourseInfo } from './CourseArticle.style';

type Props = {
	image: string;
	title: string;
	info: string;
	link: string;
} & HTMLAttributes<HTMLElement>;

const CourseArticle: FC<Props> = (props: Props) => {
	const { image, title, info, link, ...restProps } = props;
	const { staticHost } = useStaticInfo();

	return (
		<CourseArticleStyled {...restProps}>
			<ResponsiveImage name={image} breakpoints={{ s: 575 }} staticHost={staticHost} ratio="115/74" ext="png" />
			<Heading level={2}>{title}</Heading>
			<CourseInfo>{info}</CourseInfo>
			<ButtonLink to={link} type="primary" size="large">
				Подробнее о курсе
			</ButtonLink>
		</CourseArticleStyled>
	);
};

export { CourseArticle };
