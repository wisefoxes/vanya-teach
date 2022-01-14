import { useStaticInfo } from 'core/static/static-context';
import { FC } from 'react';
import { CoursesDescription } from './courses-description';
import { WavesBackground, HomeStyled, HomeSubTitle, HomeTitle, ImageWrapper, MainImage, SelectCourse } from './Home.style';

const Home: FC = () => {
	const { staticHost } = useStaticInfo();

	return (
		<HomeStyled>
			<HomeTitle>Онлайн-школа гитары Ивана Захаренко</HomeTitle>
			<HomeSubTitle>Более 1500 студентов по всему земному шару</HomeSubTitle>
			<SelectCourse to="/courses" type="primary">
				Выбрать свой курс
			</SelectCourse>
			<ImageWrapper>
				<WavesBackground />
				<MainImage name="vanya-guitar" breakpoints={{ s: 500 }} staticHost={staticHost} ratio="500/549" ext="png" />
			</ImageWrapper>
			<CoursesDescription />
		</HomeStyled>
	);
};

export { Home };
