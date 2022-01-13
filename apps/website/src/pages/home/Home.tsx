import { FC } from 'react';
import { BackgroundWaves, HomeStyled, HomeSubTitle, HomeTitle, SelectCourse } from './Home.style';

const Home: FC = () => {
	return (
		<HomeStyled>
			<HomeTitle>Онлайн-школа гитары Ивана Захаренко</HomeTitle>
			<HomeSubTitle>Более 1500 студентов по всему земному шару</HomeSubTitle>
			<SelectCourse to="/courses">Выбрать свой курс</SelectCourse>
			<BackgroundWaves />
		</HomeStyled>
	);
};

export { Home };
