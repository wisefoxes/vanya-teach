import { useStaticInfo } from 'core/static/static-context';
import { FC } from 'react';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { CourseArticle, CourseInfo, CourseLink, CourseTitle, SectionStyled } from './CoursesDescription.style';

const CoursesDescription: FC = () => {
	const { staticHost } = useStaticInfo();

	return (
		<SectionStyled>
			<CourseArticle>
				<ResponsiveImage name="anti-musical" breakpoints={{ s: 460 }} staticHost={staticHost} ratio="115/74" ext="png" />
				<CourseTitle level={2}>Онлайн-курс «Антимузыкалка»</CourseTitle>
				<CourseInfo>Фингерстайл с 0 до Pro</CourseInfo>
				<CourseLink to="/courses/anti-musical" type="primary" size="large">
					Подробнее о курсе
				</CourseLink>
			</CourseArticle>
			<CourseArticle>
				<ResponsiveImage name="guitar-from-zero" breakpoints={{ s: 460 }} staticHost={staticHost} ratio="115/74" ext="png" />
				<CourseTitle level={2}>Онлайн-курс «Гитара с нуля»</CourseTitle>
				<CourseInfo>Идеальный старт для новичков</CourseInfo>
				<CourseLink to="/courses/guitar-from-zero" type="primary" size="large">
					Подробнее о курсе
				</CourseLink>
			</CourseArticle>
		</SectionStyled>
	);
};

export { CoursesDescription };
