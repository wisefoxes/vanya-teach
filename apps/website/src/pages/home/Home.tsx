import { useStaticInfo } from 'core/static/static-context';
import { FC } from 'react';
import { AboutMe } from './about-me';
import { CoursesDescription } from './courses-description';
import { DiscountBanner } from './discount-banner';
import { WavesBackground, HomeStyled, HomeSubTitle, HomeTitle, ImageWrapper, MainImage, SelectCourse } from './Home.style';
import { WhatGet } from './what-get';
import { WhatWaits } from './what-waits';

const Home: FC = () => {
	const { staticHost } = useStaticInfo();

	return (
		<HomeStyled>
			<HomeTitle>Онлайн-школа гитары Ивана Захаренко</HomeTitle>
			<HomeSubTitle level={6}>Более 1500 студентов по всему земному шару</HomeSubTitle>
			<SelectCourse to="/courses" type="primary" size="large">
				Выбрать свой курс
			</SelectCourse>
			<ImageWrapper>
				<WavesBackground />
				<MainImage name="vanya-guitar" breakpoints={{ s: 767, m: 1023 }} staticHost={staticHost} ratio="767/842" ext="png" />
			</ImageWrapper>
			<CoursesDescription />
			<AboutMe />
			<DiscountBanner />
			<WhatWaits />
			<WhatGet />
		</HomeStyled>
	);
};

export { Home };
