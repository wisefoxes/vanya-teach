import { FC, HTMLAttributes } from 'react';
import { CourseArticle } from './course-article';
import { SectionStyled } from './CoursesDescription.style';

type Props = HTMLAttributes<HTMLElement>;

const CoursesDescription: FC<Props> = (props: Props) => {
	return (
		<SectionStyled {...props}>
			<CourseArticle image="anti-musical" title="Онлайн-курс «Антимузыкалка»" info="Фингерстайл с 0 до Pro" link="/courses/anti-musical" />
			<CourseArticle
				image="guitar-from-zero"
				title="Онлайн-курс «Гитара с нуля»"
				info="Идеальный старт для новичков"
				link="/courses/guitar-from-zero"
			/>
		</SectionStyled>
	);
};

export { CoursesDescription };
